const zodiacSigns = [
  "Capricorn",
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius"
];
const compliments = [
  "You have a great sense of humor.",
  "Your smile lights up the room.",
  "You bring out the best in people.",
  "You're an incredibly thoughtful person.",
  "You have a heart of gold.",
  "Your creativity is inspiring.",
  "You're a fantastic problem-solver.",
  "Your kindness is contagious.",
  "You have an amazing ability to connect with others.",
  "You're so knowledgeable about so many things.",
  "Your determination is admirable.",
  "You're a great listener.",
  "You make the world a better place.",
  "Your positivity is infectious.",
  "You have an eye for detail.",
  "You radiate confidence and warmth.",
  "Your ideas are always refreshing.",
  "You inspire those around you.",
  "You handle challenges with grace.",
  "You make people feel valued."
];
const victimCardCompliments = [
  "You always do good for others, but they don't appreciate it.",
  "You give so much, but rarely get anything in return.",
  "Your kindness often goes unnoticed, but it's truly remarkable.",
  "You always put others first, even when they don't deserve it.",
  "You sacrifice so much, yet people rarely acknowledge it.",
  "You have a heart of gold, but others take it for granted.",
  "You're always there for everyone, but they're not always there for you.",
  "You work so hard, yet your efforts often go unrecognized.",
  "You care deeply, even when others don't reciprocate.",
  "You forgive so easily, even when people don't deserve it.",
  "You give people the benefit of the doubt, but they rarely do the same for you.",
  "You stand by people in their tough times, but they forget you in yours.",
  "You support others even when they fail to support you.",
  "You share your wisdom, but people rarely acknowledge it.",
  "You put in extra effort, but it often goes unnoticed.",
  "You always try to make peace, but others take advantage of it.",
  "You give second chances, but rarely receive them yourself.",
  "You stay loyal, even when others are not.",
  "You encourage others, but they seldom encourage you back.",
  "You spread positivity, but people often overlook your struggles."
];
const recommendations = [
  "Feed a street dog and spread kindness.",
  "Plant a tree and nurture it.",
  "Volunteer at a local shelter or community center.",
  "Start your day with meditation for a peaceful mind.",
  "Write down three things you're grateful for daily.",
  "Spend time with your family and cherish those moments.",
  "Help someone in need, even in small ways.",
  "Read a book that inspires you to grow.",
  "Exercise regularly to keep your body healthy.",
  "Donate clothes you don't wear to charity.",
  "Cook a meal for someone and share the joy of food.",
  "Smile at strangers and brighten their day.",
  "Learn a new skill or hobby that excites you.",
  "Reduce your plastic use to help the environment.",
  "Practice deep breathing to relax your mind.",
  "Encourage someone with kind words.",
  "Keep a journal to reflect on your growth.",
  "Spend time outdoors to refresh your spirit.",
  "Share knowledge with someone eager to learn.",
  "Celebrate small wins to stay motivated."
];
const predictions = [
  "You will become a crorepati!",
  "Success is just around the corner for you.",
  "Your dream job is closer than you think.",
  "Expect the unexpected—great things are coming.",
  "You will travel the world in the next few years.",
  "A big opportunity will knock on your door soon.",
  "Your hard work will pay off in ways you can't imagine.",
  "You will make a difference in someone's life.",
  "A surprising event is coming your way.",
  "You will achieve something you once thought impossible.",
  "Your talents will be recognized by many.",
  "A new friendship will bring joy to your life.",
  "You will inspire others with your actions.",
  "Financial stability is on the horizon.",
  "You will discover a hidden strength within yourself.",
  "An exciting adventure awaits you.",
  "Your efforts will lead to long-lasting success.",
  "You will find happiness in unexpected places.",
  "A long-awaited dream will come true.",
  "Your future is brighter than you realize."
];
const form=document.getElementById('astroform');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name= document.getElementById('name').value;
    const surname= document.getElementById('surname').value;
    const day=parseInt (document.getElementById('day').value);
    const month= parseInt(document.getElementById('month').value);
    const year= parseInt(document.getElementById('year').value);

    const text=`Hi ${name} ${surname},Your Zodiac sign is ${zodiacSigns[month-1]}. ${ compliments[day-1]}.${victimCardCompliments[year%20]}.${recommendations[(day*month)%30]}.${predictions[(name.length*surname.length)%20]}`;
    document.getElementById('result').textContent=text;

})