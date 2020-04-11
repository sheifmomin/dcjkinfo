import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  public mijalis = [
    ['What is Covid-19?',
      ['Covid-19 is the infectious disease caused by the most recently discovered coronavirus. \
      This new virus and disease were unknown before the outbreak began in December 2019.']],
    ['What are the symptoms of the coronavirus Covid-19?',
      ['Common signs of infection include respiratory symptoms, fever, dry cough, \
      shortness of breath and breathing difficulties. Some patients may have aches and pains, nasal congestion, \
      runny nose, or a sore throat. In more severe cases, infection can cause pneumonia, severe acute respiratory \
      syndrome, and kidney failure.', 'People of any age can become infected. Older people, and those with pre-existing health conditions \
      are more vulnerable to become severely ill with the virus.'],],
    ['What should I do if I experience symptoms?',
      ['Follow the guidelines set out by your national government. Usually this means: do not leave home, and have necessities delivered \
      to you instead. Drink plenty of water and take paracetamol if it would help. It is best to stay in isolation, away from other people,\
       until you have recovered.', 'If you are older than 60 years or have an underlying health condition such as cardiovascular disease, \
       diabetes, high blood pressure, or a respiratory condition, and you contract symptoms, contact a doctor.', 'If your symptoms worsen\
        and you cannot cope at home, consider visiting a hospital or clinic.']],
    ['How does Covid-19 spread?',
      ['People can catch the virus from others who have it. The disease can spread from person to person through small droplets from \
      the nose or mouth which are spread when a person coughs, sneezes or exhales.The droplets land on objects or surfaces, which \
      others may touch, and then touch their eyes, nose, or mouth.']],
    ['How likely am I to be affected by the virus?',
      ['The vast majority of people who contract the disease will survive, and fortunately, children are largely unaffected. \
      Everyone should take steps to protect themselves from the virus, by following good hand hygiene and good respiratory hygiene.']],
    ['Who is most at risk of a serious illness?',
      ['Some people who are infected may not get sick at all, some will get mild symptoms from which they will recover easily, and \
      others may become very ill. The people at most risk of serious infection are:  People with compromised immune \
      systems (e.g. cancer), elderly people, and those with chronic medical conditions.']],
    ['How can I avoid contracting the virus, or spreading it to others?',
      ['Avoid hugging, kissing, or shaking hands with others. Instead, try bumping elbows, touching shoes, or greeting one another \
      with a hand on your heart. Sleep alone if possible, and wash your hands regularly with soap and water for at least 20 seconds \
      when you get home or into work.',
        'Cover your mouth and nose with a tissue or a sleeve (not your hands) when you cough or sneeze. Put used tissues into the \
      bin immediately and wash your hands afterwards. When outside, wash your hands with soap and water before and after \
      touching surfaces, door handles, elevator buttons, etc. If you cannot wash your hands, use alcohol gel hand sanitiser instead.',
        'Do not touch your eyes, nose, or mouth if your hands are not clean. Maintain at least 1 metre (3 feet) distance between \
        yourself and anyone who is coughing or sneezing.', 'Clean and disinfect frequently touches objects and surfaces using a \
        chlorine-based household cleaning spray or wipe.']],
    ['Should I wear a mask to protect myself?',
      ['It is best to only wear a mask if you are ill with Covid-19 symptoms, or looking after someone who may have contracted \
      the virus. Disposable face masks can only be used once. If you are not ill or caring for someone who is ill then it is a \
      waste of the mask. There is a world-wide shortage of masks, and the World Health Organisation urges people to use them wisely.']],
    ['Is there a cure?',
      ['At present, there is no specific treatment for coronavirus Covid-19. Antibiotics do not help, as they do not work against viruses. \
      Scientists are trying to develop a vaccine, but it could take at least 18 months to formulate, test, and distribute.']],
    ['How should I prepare for self-isolation?',
      ['Have at least a 30 day supply of regular medications. Keep enough food, water, and supplies at home to last for two weeks.',
        'However, be considerate of others; there is no need to panic-buy or stockpile groceries.']],
    ['What can I do to calm stress and anxiety?',
      ['Distinguish between what you can control and what you cannot. Wash your hands. Limit your consumption of news if it helps. \
      Treat yourself to your favourite dish, music playlist, book, or TV show. Even if you’re avoiding contact with people, you can \
      still go for a walk outside. Exercise can help both physical and mental health.', 'During this time, it is important to stay \
      connected with family, friends, and colleagues, and reach out to them if you need support.']],
    ['How can I know what information and advice is genuine and what is not?',
      ['Only pay attention to credible sources, such as official government accounts and health ministries. Email and social media \
      updates from The Ismaili website and national Jamati institutions are also trusted sources of information.', 'Good list of myth \
      busters exists on the World Health Organisation website.']],
    ['What can I do to help others?',
      ['It is safe to do so, you might consider arranging the delivery of groceries and supplies to an elderly member of the Jamat \
      or someone with an underlying health condition. You may wish to offer help to arrange a healthcare consultation for them, or \
      spend time with them on the phone, sharing information and advice. If schools are closed, you could perhaps look after a child w\
      hile their parents are at work or caring for a relative.']],
    ['When will this situation be over?',
      ['It is very difficult to predict how long it will take for the virus to dissipate, or for restrictions to be lifted. \
      It could be several months or longer. There are challenging times ahead, although as a global Jamat we are all in this together.']],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
