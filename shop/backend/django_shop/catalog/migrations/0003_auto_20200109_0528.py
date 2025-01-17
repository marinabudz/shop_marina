# Generated by Django 3.0.1 on 2020-01-09 05:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0002_auto_20200109_0518'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='photo',
            new_name='photo1',
        ),
        migrations.AddField(
            model_name='item',
            name='photo2',
            field=models.ImageField(blank=True, upload_to='itemphotos'),
        ),
        migrations.AddField(
            model_name='item',
            name='photo3',
            field=models.ImageField(blank=True, upload_to='itemphotos'),
        ),
        migrations.AddField(
            model_name='item',
            name='photo_main',
            field=models.ImageField(blank=True, upload_to='itemphotos'),
        ),
    ]
