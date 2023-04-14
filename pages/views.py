from django.views import generic


class HomePageTemplateView(generic.TemplateView):
    template_name = 'pages/index.html'


class AboutPageTemplateView(generic.TemplateView):
    template_name = 'pages/about.html'


class BlogPageListView(generic.ListView):
    pass
