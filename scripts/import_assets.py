"""
Copy selected photos from the source drives into the repo, resized.

Usage:  python scripts/import_assets.py [--force]

Reads scripts/assets_manifest.json: a list of {"src": <glob>, "dest": <path>}.
`src` may start with a root alias (see ROOTS). Globs are used because some
source filenames contain decomposed Unicode (e.g. "Ö"). Existing destination
files are skipped unless --force is given.

Output: JPEG, long side <= MAX_SIDE (2400 px, or 1600 px for portraits/
figures when the manifest entry sets "max"), EXIF orientation applied,
metadata stripped. Astro's image pipeline creates the responsive variants.

Requires: Pillow, pillow-heif (for HEIC), sources available locally.
Credits are NOT stored here: they live in the content entries that use
the images (src/content/...). See docs/assets.md.
"""

import glob
import json
import sys
from pathlib import Path

from PIL import Image, ImageOps

try:
    import pillow_heif

    pillow_heif.register_heif_opener()
except ImportError:  # HEIC sources will fail with a clear error
    pass

REPO = Path(__file__).resolve().parent.parent
ROOTS = {
    "DRIVE": r"C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement",
    "HDRIVE": r"H:\My Drive\TU Wien\Project Works\TSOE",
    "PAPER": r"D:\Programming\The-Sound-of-Entanglement",
    "THESIS": r"D:\Programming\Master-Thesis",
}
MAX_SIDE = 2400


def resolve(src: str) -> Path:
    for alias, root in ROOTS.items():
        if src.startswith(alias + "/"):
            src = root + "\\" + src[len(alias) + 1 :].replace("/", "\\")
    matches = sorted(glob.glob(src))
    if not matches:
        raise FileNotFoundError(src)
    return Path(matches[0])


def main() -> None:
    force = "--force" in sys.argv
    manifest = json.loads((REPO / "scripts" / "assets_manifest.json").read_text(encoding="utf-8"))
    done = skipped = failed = 0
    for entry in manifest:
        dest = REPO / entry["dest"]
        if dest.exists() and not force:
            skipped += 1
            continue
        try:
            src = resolve(entry["src"])
            img = ImageOps.exif_transpose(Image.open(src))
            if img.mode not in ("RGB", "L"):
                bg = Image.new("RGB", img.size, (0, 0, 0))
                bg.paste(img.convert("RGBA"), mask=img.convert("RGBA").split()[-1])
                img = bg
            img.thumbnail((entry.get("max", MAX_SIDE),) * 2, Image.LANCZOS)
            dest.parent.mkdir(parents=True, exist_ok=True)
            img.convert("RGB").save(dest, "JPEG", quality=entry.get("quality", 86), optimize=True, progressive=True)
            done += 1
            print(f"ok   {entry['dest']}  {img.size[0]}x{img.size[1]}")
        except Exception as exc:  # keep going, report at the end
            failed += 1
            print(f"FAIL {entry['dest']}: {exc}")
    print(f"\n{done} written, {skipped} skipped, {failed} failed")


if __name__ == "__main__":
    main()
