TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / "templates"],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',   # ✅ Required for request object
                'django.contrib.auth.context_processors.auth',  # ✅ Required for user object
                'django.template.context_processors.csrf',
                'django.template.context_processors.static',
                'django.template.context_processors.media',
            ],
        },
    },
]
