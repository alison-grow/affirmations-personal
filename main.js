window.onload = () => {

}
const up = document.getElementById("header");
const down = document.getElementById("display");
const btn = document.getElementById("button");
const arr = [
    "I may make mistakes, but I can recover and keep going.  I don’t need to lose hope over a minor setback.",
    "I do not want to waste a single moment of my life - I can’t get it back. I will squeeze as much happiness as possible out of every day.",
    "No one else can fix my problems - I will find my own solutions instead of waiting for someone to do it for me",
    "Not everything will be easy, but I will persevere because my goals are worth pursuing",
    "My mood doesn’t depend on other people’s opinions",
    "I don’t have to be productive to see value in myself",
    "No one is going to hand me success. Everything requires effort on my part",
    "Not everybody will understand my situation, and it is okay",
    "I am in charge of my life, and my happiness and I feel happy and content",
    "I will not let the stress of yesterday burden me today",
    "I am releasing self judgement and embracing self love",
    "Success lingers around me. I just have to grab onto it",
    "I am grateful for every day I am alive and everything I have in my life",
    "I am not defined by my past",
    "I participate in life, I don’t wait for it to happen",
    "I’m dedicated to self improvement",
    "I am capable of change",
    "Stepping outside of my comfort zone is necessary for growth",
    "I will try to be more understanding of others",
    "I have made it this far, and I won’t stop now",
    "I forgive others",
    "Shame cannot control me anymore",
    "I have compassion for others and myself",
    "My worth is not defined by others",
    "What others think of me is none of my business",
    "I will no longer compare myself to others",
    "I will no longer allow myself to be defined by society’s standards",
    "I am beautiful just as I am",
    "I accept myself unconditionally",
    "I am comfortable in my own skin",
    "I am strong enough to overcome anything",
    "When I forgive myself, I make room for more love in my life",
    "I am more than what people think I am, and my thoughts do not shape my life",
    "It’s in my head. It won’t last forever, and I will come out stronger",
    "I don’t worry about the things I can’t control",
    "I strive to achieve inner peace",
    "Most of the limitations in my life are fictional",
    "There is nothing I am afraid of",
    "I can only give happiness to others once I have found happiness in myself",
    "This darkness won’t last forever",
    "I love myself, and I am happy",
    "I am proud of how I got through this day",
    "I can embrace my flaws and imperfections",
    "I open my soul to peace",
    "I am growing into a more generous person",
    "I am worthy and deserving of respect",
    "The negative things my mind says about me aren’t helpful",
    "I feel good about myself",
    "My self-acceptance makes me even more attractive",
    "I am grateful for everything I have in life",
    "I present myself graciously",
    "I was beautiful, I am beautiful and I will always be beautiful",
    "I can do it",
    "Today will be a productive day",
    "I choose to see the beauty in my surroundings",
    "Everything is going to be okay",
    "I am living my own life with my own unique story. I live free from the opinions of others",
    "I can be anything I want to be",
    "I can let go of my insecurities",
    "I value myself",
    "I have made mistakes, but I will not let them define me",
    "I have the power to shape my ideal reality",
    "I am meant to live a happy life",
    "Brighter days are ahead",
    "My life has meaning",
    "I belong in this world. There are people that care about me and my worth",
    "I am going to forgive myself and free myself. I deserve to forgive and be forgiven",
    "Things are getting better",
    "Life is not a sprint, it's a marathon. I take it one step at a time",
    "Today is a gift, and I embrace it with positivity",
    "I am cultivating a beautiful life free of stress, worries, or fear",
    "I bid farewell to old bad habits and welcome positive change in my life",
    "Today I choose to be happy",
    "I inhale positive energy and exhale my fears",
    "My imperfections make me unique and beautiful",
    "Peace flows through my mind and body",
    "I release anxiety and stress with every exhale",
    "My approval is the only one that matters to me",
    "I look forward to the future",
    "I focus only on the positive in my life",
    "I am in control of all aspects of my life",
    "I will be true to myself, always",
    "I am in complete control of my emotions",
    "I choose to feel good",
    "I’m optimistic about the future",
    "I find pleasure in the little moments",
    "I can only give happiness to others once I have found happiness in myself",
    "I am the architect of my fate. I can achieve what I have dreamt for myself",
    "Every day is an opportunity to be better",
    "The past does not equal the future",
    "If you need a hero, just look in the mirror. No one's gonna save you now, so you better save yourself - Kali Uchis",
    "I can be soft in my heart and firm in my boundaries",
    "Winners don't quit - don't give up",
    "Nothing good ever comes easy",
    "I look forward to tomorrow and the opportunities that await me",
    "It’s time to evolve",
    "I am not scared of taking risks",
    "I choose to embrace the mystery of life",
    "I am capable of achieving greatness",
    "Every day I become more confident, powerful, and successful",
    "I love the person I am becoming",
    "I have complete confidence in myself and my path",
    "I will not try to impress others - I am improving for me",
    "My past will not dictate my future",
    "I am open to new and beautiful changes",
    "I don’t have to be perfect",
    "Every day, I am going to try and become a better person",
    "Letting go creates space for opportunities to come",
    "I practice gratitude for all that I have, and all that is yet to come",
    "I constantly aspire to improve myself",
    "I will face the world with confidence",
    "I know I can achieve anything I want in life",
    "Mistakes are just another learning opportunity",
    "I’m holding my head up high despite what people say about me",
    "Fear is preventing me from growing, so I let go of it",
    "The time for sitting around has passed, I must act now",
    "Even if others hurt me, I choose to forgive them and move on",
    "I love seeing my confidence grow every single day",
    "I am confident"
];
btn.innerHTML = "new affirmation"
up.innerHTML = "personal affirmations"
document.getElementById("display").onload = myFunction();
function myFunction() {
    down.innerHTML = arr[Math.floor(Math.random() * arr.length)];
}