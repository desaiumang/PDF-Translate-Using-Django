from django.db import models

from datetime import datetime

# Create your models here.
class InputLanguage(models.TextChoices):
    CHINESE = "CHINESE"
    SPANISH = "SPANISH"
    ENGLISH = "ENGLISH"
    HINDI = "HINDI"
    ARABIC = "ARABIC"
    BENGALI = "BENGALI"
    PORTUGUESE = "PORTUGUESE"
    RUSSIAN = "RUSSIAN"
    JAPANESE = "JAPANESE"
    INDONESIAN = "INDONESIAN"

class BookMst(models.Model):
    id= models.AutoField(primary_key=True)
    book_name = models.TextField(max_length=250)
    book_author = models.TextField(max_length=250)
    book_path = models.FileField(max_length=500, upload_to="originalBooks/")
    input_language = models.CharField(max_length=250, choices=InputLanguage.choices)
    output_language = models.CharField(max_length=250, choices=InputLanguage.choices)
    is_private = models.IntegerField(default=0)
    created_by = models.IntegerField()
    created_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'book_mst'
        managed = False

class TranslationBookMap(models.Model):
    id= models.AutoField(primary_key=True)
    book_id= models.IntegerField()
    translated_language= models.CharField(max_length=250, choices=InputLanguage.choices)
    translated_book_path= models.FileField(upload_to="translatedBooks/")
    created_by= models.IntegerField()
    created_date= models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'translation_book_map'
        managed = False