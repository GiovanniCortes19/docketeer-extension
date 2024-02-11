import { http, HttpResponse } from 'msw';

// ddClient request handlers
export const handlers = [
  http.get('/api/docker/image', () => {
    return HttpResponse.json([
      {
        CreatedAt: '01/01/24',
        ID: 'test01',
        Repository: 'postgres',
        ScanName: 'postgres:latest',
        Tag: 'latest',
      },
      {
        CreatedAt: '01/02/24',
        ID: 'test02',
        Repository: 'dockerFizz',
        ScanName: 'dockerFizz:24.8',
        Tag: '24.8',
      },
    ]);
  }),
  http.post('/api/docker/image/scan', () => {
    return HttpResponse.json({
      Critical: 9,
      High: 6,
      Medium: 3,
      Low: 1,
    });
  }),
  http.get('/api/docker/container/running', () => {
    return HttpResponse.json([
      {
        block: '0B/0B',
        ID: 'a802306eeac3',
        CPUPerc: '0.17%',
        MemPerc: '0.11%',
        MemUsage: '2.195MiB/1.944GiB',
        Names: 'blissful_matsumoto',
        NetIO: '796B/0B',
        PIDs: '5',
      },
    ]);
  }),
  http.get('/api/docker/container/stopped', () => {
    return HttpResponse.json([
      {
        Names: 'zealous',
        ID: 'c902ec744095',
        Image: '84c5f6e03bf0',
        RunningFor: '2 days ago',
      },
    ]);
  }),
  http.get('/api/docker/network/container', () => {
    return HttpResponse.json([
      {
        networkName: 'Test Network',
        containers: [
          {
            ID: '1networkId',
            Name: 'test network container',
            EndpointID: 'test endpoint',
            IPv4Address: 'test IPv4',
            IPv6Address: 'test IPv6',
            MacAddress: 'test MacAddress',
          },
        ],
      },
    ]);
  }),
  http.get('/api/docker/volume', () => {
    return new HttpResponse(null, { status: 200 });
  }),
];
