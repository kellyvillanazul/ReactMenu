# Generated by Django 2.2.4 on 2019-08-04 21:40

from django.db import migrations, models
import src.item.models


class Migration(migrations.Migration):

    dependencies = [
        ('item', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='image',
            field=models.ImageField(null=True, upload_to=src.item.models.content_path),
        ),
    ]
