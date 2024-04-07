import random
import json

class Case:
    def __init__(self, motion, side):
        self.motion = motion
        self.side = side

def topic_generation():
    try:
        with open("topics.json", "r") as read_file:
            topic_file = json.load(read_file)
            if not topic_file:
                return None  # File is empty
            random_topic = random.choice(topic_file)
            return random_topic
    except FileNotFoundError:
        print("Error: File 'topics.json' not found.")
        return None
    except json.JSONDecodeError:
        print("Error: Malformed JSON in 'topics.json'.")
        return None

def side_choice(side_choice, motion_choice):
    if side_choice:
        return Case(motion_choice, side_choice)
    else:
        return Case(motion_choice, random.choice([True, False]))

class DebateMotion:
    def motion(self, own_choice: bool):
        if own_choice:
            motion_choice = ""  # In-development
            side_choice_value = bool  # In-development | #True = Affirmative, False = Negative
            return side_choice(side_choice_value, motion_choice)
        else:
            motion_choice = topic_generation()  # string
            side_choice_value = bool  # In-development

            while True:  # Repeatedly choose motion until user confirms
                choose_again = bool  # In-development
                if not choose_again:
                    break
                motion_choice = topic_generation()

            return side_choice(side_choice_value, motion_choice)

