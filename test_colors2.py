import os
from PIL import Image
from collections import Counter

images = [
    'custom-ps.png', 'custom-pr.png', 'custom-ae.png', 'custom-ai.png',
    'custom-id.png', 'custom-sketchup.png', 'custom-blender.png',
    'custom-office.png', 'custom-shield.png', 'custom-a.jpg',
    'gemini.svg', 'ai.svg'
]

print('[')
for img_name in images:
    path = os.path.join('public', 'images', img_name)
    color = '#ffffff'
    if os.path.exists(path) and (img_name.endswith('.png') or img_name.endswith('.jpg')):
        try:
            with Image.open(path) as img:
                img = img.convert('RGBA')
                w, h = img.size
                
                # Sample colors from a cross in the center and edges
                points = [
                    (w//2, h//2), # center
                    (w//4, h//4), (3*w//4, 3*h//4), 
                    (w//2, h//4), (w//2, 3*h//4),
                    (w//4, h//2), (3*w//4, h//2),
                    (5, 5), (w-5, h-5) # near edges
                ]
                
                colors = []
                for p in points:
                    try:
                        r, g, b, a = img.getpixel(p)
                        if a > 200: # only solid colors
                            colors.append('#{:02x}{:02x}{:02x}'.format(r, g, b))
                    except:
                        pass
                
                if colors:
                    color = Counter(colors).most_common(1)[0][0]
        except Exception as e:
            pass
    print('  {"url": "/images/' + img_name + '", "color": "' + color + '"},')
print(']')
