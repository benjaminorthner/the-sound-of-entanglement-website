"""
Normalise partner/funder logos to one treatment for the black site.

Usage: python scripts/prepare_logos.py <source-dir>

Source files are the official logos (from the shared drive or the
organisations' own websites; see docs/assets.md). Output goes to
src/assets/logos/<slug>.png, trimmed, max 480 px high:

  "ink"   dark-on-light logos: luminance -> alpha, drawn in white
  "keep"  logos made for dark backgrounds (official negative/white variants);
          kept as they are, only trimmed. Used where brand rules forbid
          recolouring (anton bruckner 2024 uses its official grey variant).
"""
import sys
from pathlib import Path

from PIL import Image, ImageChops

REPO = Path(__file__).resolve().parent.parent
OUT = REPO / "src" / "assets" / "logos"

# slug: (source file, mode)
LOGOS = {
    "anton-bruckner-2024": ("34_Bruckner24_Aniver_Logo_GRA-GRA_white_EN.png", "keep"),
    "ars-electronica": ("ars.jpg", "ink"),
    "mariendom": ("mariendom.png", "ink"),
    "tu-wien": ("tuwien_svg.png", "ink"),
    "jku": ("jku_web_svg.png", "keep"),
    "jku-lit": ("lit.png", "ink"),
    "uibk": ("uibk_neg_svg.png", "keep"),
    "vcq": ("vcq_t.png", "keep"),
    "bruckneruni": ("abu_svg.png", "ink"),
    "kunstuni-linz": ("kunstuni.png", "ink"),
    "fwf": ("fwf.png", "ink"),
    "beyondc": ("beyondc.png", "ink"),
    "quanta": ("quanta.png", "ink"),
    "stadt-wien-kultur": ("wienkultur.jpg", "ink"),
    "bmwkms": ("bmwkms.png", "ink"),
    "acf-washington": ("acfdc.png", "ink"),
}


def on_white(im: Image.Image) -> Image.Image:
    im = im.convert("RGBA")
    bg = Image.new("RGBA", im.size, (255, 255, 255, 255))
    bg.alpha_composite(im)
    return bg


def ink(im: Image.Image) -> Image.Image:
    """Dark-on-light -> white, alpha from the darkest channel (contrast-stretched).

    Using min(R, G, B) instead of luminance treats saturated colours (JKU blue,
    Stadt Wien red, Bruckner Uni green) as full ink, like black text.
    """
    rgb = on_white(im).convert("RGB")
    r, g, b = rgb.split()
    darkest = ImageChops.darker(ImageChops.darker(r, g), b)
    alpha = darkest.point(lambda v: max(0, min(255, int((235 - v) * 255 / (235 - 60)))))
    out = Image.new("RGBA", im.size, (255, 255, 255, 0))
    out.putalpha(alpha)
    return out


def trim(im: Image.Image) -> Image.Image:
    bbox = im.getchannel("A").point(lambda a: 255 if a > 12 else 0).getbbox()
    return im.crop(bbox) if bbox else im


def main(src: Path) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for slug, (name, mode) in LOGOS.items():
        im = Image.open(src / name)
        im = ink(im) if mode == "ink" else im.convert("RGBA")
        im = trim(im)
        if im.height > 480:
            im = im.resize((round(im.width * 480 / im.height), 480), Image.LANCZOS)
        im.save(OUT / f"{slug}.png", optimize=True)
        print(f"{slug:22s} {im.width}x{im.height}")


if __name__ == "__main__":
    main(Path(sys.argv[1]))
