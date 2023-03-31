from unicodedata import category
from django.shortcuts import render


from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Courses, Quiz, StudyMaterial
from rest_framework import status
from .serializers import CoursesSerializer, QuizSerializer, MaterialSerializer

from PyPDF2 import PdfFileReader
import googletrans
from googletrans import Translator
from reportlab.lib.pagesizes import letter
from reportlab.platypus import Paragraph
from reportlab.platypus import SimpleDocTemplate

from translate_pdfs.fonts import *
URL_COM = 'translate.googleapis.com'
LANG = "en"

@api_view(['GET'])
def viewCourse(request):
    quest = Courses.objects.all()
    serialized_posts = CoursesSerializer(quest, many = True)
    return Response({'status': 1,'post':serialized_posts.data})

@api_view(['GET'])
def viewCourseInfo(request):
    quest = Courses.objects.filter(id=request.data['id'])
    serialized_posts = CoursesSerializer(quest, many = True)
    return Response({'status': 1,'post':serialized_posts.data})


@api_view(['POST'])
def createCourse(request):
    try:
        # user = request.user
        data = request.data
        if request.FILES is not None:
            p_image = request.FILES
        else:
            p_image = None
        posts = Courses.objects.create( title = data['title'], description = data['description'], videofile= p_image['videofile'], thumbnail= p_image['thumbnail'])
        serialized_post = CoursesSerializer(posts, many=False)
        return Response({'status': 1, 'message':"Post created successfully",'post':serialized_post.data})
    except:
        detail = { 'status': 0, 'message' : 'Oof something went wrong while creating Post!' }
        return Response(detail, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def viewQuiz(request):
    data = request.data
    cat = data['category']
    quest = Quiz.objects.filter(category=cat)
    serialized_posts = QuizSerializer(quest, many = True)
    return Response({'status': 1,'post':serialized_posts.data})


@api_view(['POST'])
def createQuiz(request):
    try:
        # user = request.user
        data = request.data
        
        one=False
        two=False
        three=False
        four=False
        if data['correctAns'] == 'one':
            one = True
        elif data['correctAns'] == 'two':
            two = True
        elif data['correctAns'] == 'three':
            three = True
        elif data['correctAns'] == 'four':
            four = True
        posts = Quiz.objects.create(category = data['category'], question = data['question'], option_one = data['option_one'],option_two = data['option_two'],option_three = data['option_three'],option_four = data['option_four'], one_iscorrect=one , two_iscorrect=two , three_iscorrect=three , four_iscorrect=four)
        serialized_post = QuizSerializer(posts, many=False)
        return Response({'status': 1, 'message':"created successfully",'post':serialized_post.data})
    except:
        detail = { 'status': 0, 'message' : 'Oof something went wrong while creating!' }
        return Response(detail, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def isl(request):
    try:
        print(request.data)
        data = request.data
        text = data['text']
        isl_gif=['all the best', 'any questions', 'are you angry', 'are you busy', 'are you hungry', 'are you sick', 'be careful',
                'can we meet tomorrow', 'did you book tickets', 'did you finish homework', 'do you go to office', 'do you have money',
                'do you want something to drink', 'do you want tea or coffee', 'do you watch TV', 'dont worry', 'flower is beautiful',
                'good afternoon', 'good evening', 'good morning', 'good night', 'good question', 'had your lunch', 'happy journey',
                'hello what is your name', 'how many people are there in your family', 'i am a clerk', 'i am bore doing nothing', 
                 'i am fine', 'i am sorry', 'i am thinking', 'i am tired', 'i dont understand anything', 'i go to a theatre', 'i love to shop',
                'i had to say something but i forgot', 'i have headache', 'i like pink colour', 'i live in nagpur', 'lets go for lunch', 'my mother is a homemaker',
                'my name is john', 'nice to meet you', 'no smoking please', 'open the door', 'please call an ambulance', 'please call me later',
                'please clean the room', 'please give me your pen', 'please use dustbin dont throw garbage', 'please wait for sometime', 'shall I help you',
                'shall we go together tommorow', 'sign language interpreter', 'sit down', 'stand up', 'take care', 'there was traffic jam', 'wait I am thinking',
                'what are you doing', 'what is the problem', 'what is todays date', 'what is your age', 'what is your father do', 'what is your job',
                'what is your mobile number', 'what is your name', 'whats up', 'when is your interview', 'when we will go', 'where do you stay',
                'where is the bathroom', 'where is the police station', 'you are wrong','address','agra','ahemdabad', 'all', 'april', 'assam', 'august', 'australia', 'badoda', 'banana', 'banaras', 'banglore',
'bihar','bihar','bridge','cat', 'chandigarh', 'chennai', 'christmas', 'church', 'clinic', 'coconut', 'crocodile','dasara',
'deaf', 'december', 'deer', 'delhi', 'dollar', 'duck', 'febuary', 'friday', 'fruits', 'glass', 'grapes', 'gujrat', 'hello',
'hindu', 'hyderabad', 'india', 'january', 'jesus', 'job', 'july', 'july', 'karnataka', 'kerala', 'krishna', 'litre', 'mango',
'may', 'mile', 'monday', 'mumbai', 'museum', 'muslim', 'nagpur', 'october', 'orange', 'pakistan', 'pass', 'police station',
'post office', 'pune', 'punjab', 'rajasthan', 'ram', 'restaurant', 'saturday', 'september', 'shop', 'sleep', 'southafrica',
'story', 'sunday', 'tamil nadu', 'temperature', 'temple', 'thursday', 'toilet', 'tomato', 'town', 'tuesday', 'usa', 'village',
'voice', 'wednesday', 'weight']
        arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r',
        's','t','u','v','w','x','y','z']
        try:
            if (text.lower() in isl_gif):
                im = r'/letters/{0}.gif'.format(text.lower())
                frames = []
                frames.append(im)
                print(frames)
                return Response({'status': 1, 'message':"created successfully",'images':frames})
            else:
                ImageNumpyFormat = []
                for i in range(len(text)):
                    if(text[i] in arr):
                        ImageAddress = '/letters/'+text[i]+'.jpg'
                        ImageNumpyFormat.append(ImageAddress)
                    else:
                        continue
                return Response({'status': 1, 'message':"created successfully",'images':ImageNumpyFormat})
        except:
            return Response({'status': 0, 'message':"unsuccessful"})
    except:
        detail = { 'status': 0, 'message' : 'Oof something went wrong while creating!' }
        return Response(detail, status=status.HTTP_400_BAD_REQUEST)
    


@api_view(['POST'])
def uploadMaterials(request):
    try:
        pdf = request.FILES
        pdf = StudyMaterial.objects.create( file= pdf['file'])
        return Response({'status': 1, 'message':"Upload successful"})
    except:
        detail = { 'status': 0, 'message' : 'Oof something went wrong while creating Post!' }
        return Response(detail, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getMaterials(request):
    try:
        pdf = StudyMaterial.objects.filter(id=request.data['id'])
        LANG = request.data['lang']
        serialized_pdf = MaterialSerializer(pdf, many = True)
        file_name = serialized_pdf.data[0]['file']
        translation = translate_pdf(file_name, LANG)
        print(translation)
        return Response({'status': 1,'post':serialized_pdf.data, 'translated_text':translation})
    except:
        detail = { 'status': 0, 'message' : 'Oof something went wrong while creating Post!' }
        return Response(detail, status=status.HTTP_400_BAD_REQUEST)
    

def translate_pdf(path, lang):
    path = "D:/Syrus_Web2_issa_web/Syrus_Web2_issa_web-backend/ustaad"+path
    file = open(path, 'rb')
    reader = PdfFileReader(file)

    num_pages = reader.numPages
    page_contents = []
    translator = Translator(service_urls=[URL_COM])
    for p in range(num_pages):
        page = reader.getPage(p)
        text = page.extractText()
        translation = translator.translate(text, dest=lang)
        result_text = translation.text.replace("\n", " ").replace("W", "")
        page_contents.append(result_text)
    return page_contents
