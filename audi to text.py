from moviepy.editor import VideoFileClip

video_path = "video (1).mp4"

video_clip = VideoFileClip(video_path)

audio_clip = video_clip.audio

output_audio_path = "opaudio.mp3"

audio_clip.write_audiofile(output_audio_path)

video_clip.close()
audio_clip.close()
#!pip install  pydub
#pip3 install moviep
#pip3 install SpeechRecogni
import speech_recognition as sr
from pydub import AudioSegment

sound = AudioSegment.from_mp3("opaudio.mp3")
sound.export("transcript.wav", format="wav")

AUDIO_FILE = "transcript.wav"

r = sr.Recognizer()

languages = ["hi-IN", "en-IN"]  

for language in languages:
    with sr.AudioFile(AUDIO_FILE) as source:
        audio = r.record(source)
        
        try:
            transcription = r.recognize_google(audio, language=language)
            print("Transcription ({0}): {1}".format(language, transcription))
        except sr.UnknownValueError:
            print("Speech recognition could not understand audio for language", language)
        except sr.RequestError as e:
            print("Could not request results from Google Speech Recognition service for language", language, "; {0}".format(e))

