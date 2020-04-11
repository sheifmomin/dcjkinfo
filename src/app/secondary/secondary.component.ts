import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.scss']
})
export class SecondaryComponent implements OnInit {

  public oldMijalis = [
    ['January', 'Jamada al-Awwal/Jamada al-Thani', [
      ['Thursday 2nd', 'Mawlano Rojo'],
      ['Friday 3rd', 'Paanch Baar Saal'],
      ['Saturday 18th', 'Students Mijalis'],
      ['Saturday 25th', 'Chandraat'],
      ['Sunday 26th', 'Bait-ul Khayal']
    ]],
    ['February', 'Jamada al-Thani/Rajjab', [
      ['Saturday 1st', 'Mawlano Rojo'],
      ['Sunday 2nd', 'Paanch Baar Saal'],
      ['Saturday 15th', 'Students Mijalis'],
      ['Monday 17th - Sunday, 23rd', 'Bait-ul Khayal Satadal'],
      ['Monday 24th', 'Chandraat']
    ]],
    ['March', 'Rajjab/Shaban', [
      ['Sunday 1st', 'Bait-ul Khayal'],
      ['Monday 2nd', 'Mawlano Rojo'],
      ['Tuesday 3rd', 'Paanch Baar Saal'],
      ['Saturday 7th', 'Yawn-e Ali'],
      ['Saturday 14th', 'Students Mijalis (K)'],
      ['Saturday 21th', 'Navroz/Shab-e-Miraj'],
      ['Tuesday 24th', 'Chandraat (K)'],
      ['Saturday 28th', 'Huzur Panje Bhenu'],
      ['Sunday 29th', 'Bait-ul Khayal (K)'],
      ['Tuesday 31th', 'Mawlano Rojo (K)']
    ]]
  ];

  public mijalis = [
    ['April', 'Shaban/Ramadan',
      [['Wednesday, 1st', 'Paanch Baar Saal'],
      ['Saturday 4th - Friday 10th', 'Muskil Assan Satadal'],
      ['Saturday 18th', 'Students Mijalis'],
      ['Thursday 23rd', 'Chandraat'],
      ['Sunday 26th', 'Bait-ul Khayal'],
      ['Thursday 30th', 'Mawlano Rojo']
      ]],
    ['May', 'Ramadan/Shawwal',
      [['Friday, 1st', 'Paanch Baar Saal'],
      ['Friday 15th', 'Laylat al-Qadar'],
      ['Saturday 16th', 'Students Mijalis'],
      ['Saturday 23rd', 'Chandraat'],
      ['Sunday 24th', 'Eid-al-Fitr (tentative)'],
      ['Sunday 24th', 'Bait-ul Khayal'],
      ['Monday 25th - Sunday 31st', 'Bait-ul Khayal Statada'],
      ['Saturday 30th', 'Mawlano Rojo'],
      ['Sunday 31st', 'Paanch Baar Saal'],
      ]],
    ['June', 'Shawwal/Dhul-Qida',
      [['Saturday, 20th', 'Students'],
      ['Sunday 21st', 'Chandraat'],
      ['Saturday 27th', 'Huzur Panje Bhenu'],
      ['Sunday 28th', 'Bait-ul Khayal'],
      ['Sunday 28th', 'Mawlano Rojo'],
      ['Monday 29th', 'Paanch Baar Saal']
      ]],
    ['July', 'Dhul-Qida/Dhu al-Hajj',
      [['Saturday 11th', 'Imamat Day'],
      ['Tuesday 21st', 'Chandraat (K)'],
      ['Saturday 25th', 'Students Mijalis (K)'],
      ['Sunday 26th', 'Bait-ul Khayal (K)'],
      ['Tuesday 28th', 'Mawlano Rojo (K)'],
      ['Wednesday 29th', 'Paanch Baar Saal (K)'],
      ['Friday 31th', 'Eid-al-Adha (tentative)']
      ]],
    ['August', 'Dhu al-Hajj/Muharram',
      [['Monday 3rd - Sunday 9th', 'Bait-ul Khayal Statada'],
      ['Friday 7th', 'Eid-e-Ghadir'],
      ['Saturday 15th', 'Students Mijalis'],
      ['Wednesday 19th', 'Chandraat'],
      ['Sunday 23rd', 'Bait-ul Khayal'],
      ['Wednesday 26th', 'Mawlano Rojo'],
      ['Thursday 27th', 'Paanch Baar Saal']
      ]],
    ['September', 'Muharram/Safar',
      [['Saturday, 12th', 'Students Mijalis'],
      ['Friday 18th', 'Chandraat (Beej)'],
      ['Saturday 19th', 'Huzur Panje Bhenu'],
      ['Friday 25th', 'Mawlano Rojo'],
      ['Saturday 26th', 'Paanch Baar Saal'],
      ['Sunday 27th', 'Bait-ul Khayal']
      ]],
    ['October', 'Safar/Rabi al-Awwal',
      [['Saturday, 3rd - Friday 9th', 'Muskil Assan Satadal'],
      ['Saturday 10th', 'Students Mijalis'],
      ['Saturday 17th', 'Chandraat'],
      ['Sunday 18th', 'Bait-ul Khayal'],
      ['Saturday 24th', 'Mawlano Rojo'],
      ['Sunday 25th', 'Paanch Baar Saal'],
      ['Wednesday 28th', 'Milad un-Nabi']
      ]],
    ['November', 'Rabi al-Awwal/Rabi al-Thani',
      [['Saturday, 14th', 'Students Mijalis'],
      ['Sunday 15th', 'Chandraat'],
      ['Sunday 22nd', 'Bait-ul Khayal'],
      ['Sunday 22nd', 'Mawlano Rojo'],
      ['Monday 23rd', 'Paanch Baar Saal'],
      ['Monday 23rd - Sunday 29th', 'Bait-ul Khayal Statada']
      ]],
    ['December', 'Rabi al-Thani/Jamada al-Awwal',
      [['Sunday 13th', 'Salgirah'],
      ['Tuesday 15th', 'Chandraat (K)'],
      ['Saturday 19th', 'Students Mijalis (K)'],
      ['Sunday 20th', 'Bait-ul Khayal (K)'],
      ['Tuesday 22nd', 'Mawlano Rojo (K)'],
      ['Wednesday 23rd', 'Paanch Baar Saal (K)'],
      ['saturday 26th', 'Huzur Panje Bhenu']
      ]],
  ];
  constructor() {
  }

  ngOnInit() {
  }
}
