# Generated by Django 4.2.4 on 2023-08-10 08:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_rename_user_vendor_username'),
    ]

    operations = [
        migrations.RenameField(
            model_name='vendor',
            old_name='username',
            new_name='user',
        ),
    ]
