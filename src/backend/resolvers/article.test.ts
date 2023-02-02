import { fromRequestData } from "./article";

describe('requestData Resolver Test', () => {
  it('fromRequestData succesfully', () => {
    const requestData =  {
      id: 'yt:video:5escj6YAHSA',
      'yt:videoId': '5escj6YAHSA',
      'yt:channelId': 'UCtNTsm4XIQf-TNk5nntGTOA',
      title: 'Risk of Rain 2 Review | Voiding® Out® Hard®',
      link: { 'href': 'https://www.youtube.com/watch?v=QqZmmorkxXo' },
      author: {
        name: 'Verac',
        uri: 'https://www.youtube.com/channel/UCtNTsm4XIQf-TNk5nntGTOA'
      },
      published: '2022-08-06T15:00:02+00:00',
      updated: '2022-12-16T00:33:57+00:00',
      'media:group': {
        'media:title': 'Risk of Rain 2 Review | Voiding® Out® Hard®',
        'media:content': {
          width:"640",
          height:"390",
          type: "application/x-shockwave-flash",
          url: "https://www.youtube.com/v/QqZmmorkxXo?version=3",
        },
        'media:thumbnail': {
          url: "https://i2.ytimg.com/vi/QqZmmorkxXo/hqdefault.jpg",
          width: "480",
          height: "360",
        },
        'media:community': {},
        'media:description': 'A lovely game for lovely people.\n',
      }
    };

    const response = fromRequestData([requestData]);
    expect(response).toHaveLength(1);

    const formatted = response[0];
    expect(formatted).toMatchObject({
      id : requestData.id,
      link: requestData.link.href,
      title: requestData.title,
      author: requestData.author,
      updated: requestData.updated,
      videoId: requestData['yt:videoId'],
      channelId: requestData['yt:channelId'],
      published: requestData.published,
      media: {
        title: requestData['media:group']['media:title'],
        description: requestData['media:group']['media:description'],
        content:{
          url: requestData['media:group']['media:content'].url,
          type: requestData['media:group']['media:content'].type,
          width: requestData['media:group']['media:content'].width,
          height: requestData['media:group']['media:content'].height,
        },
        thumbnail: {
          url: requestData['media:group']['media:thumbnail'].url,
          width: requestData['media:group']['media:thumbnail'].width,
          height: requestData['media:group']['media:thumbnail'].height,
        },
      },
    })
  })
})

export {}
