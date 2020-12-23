from django.contrib import admin
from .models import Event # add this

# Register your models here.
class EventAdmin(admin.ModelAdmin):  # add this
  list_display = ('title', 'description', 'completed') # add this

# Register your models here.
admin.site.register(Event, EventAdmin) # add this