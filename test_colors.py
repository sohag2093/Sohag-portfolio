import os
from PIL import Image

images = [
    'custom-ps.png', 'custom-pr.png', 'custom-ae.png', 'custom-ai.png',
    'custom-id.png', 'custom-sketchup.png', 'custom-blender.png',
    'custom-office.png', 'custom-shield.png', 'custom-a.jpg',
    'gemini.svg', 'ai.svg'
]

print('[')
for img_name in images:
    path = os.path.join('public', 'images', img_name)
    color = '#ffffff' # default white
    if os.path.exists(path):
        if img_name.endswith('.png') or img_name.endswith('.jpg'):
            try:
                with Image.open(path) as img:
                    img = img.convert('RGBA')
                    # sample a pixel near the edge, e.g. (1, 1) or (0, 0)
                    r, g, b, a = img.getpixel((0, 0))
                    if a > 0:
                        color = '#{:02x}{:02x}{:02x}'.format(r, g, b)
            except Exception as e:
                pass
    print('  {"url": "/images/' + img_name + '", "color": "' + color + '"},')
print(']')
