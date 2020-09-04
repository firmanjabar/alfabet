import Nav from '../../components/nav';
import HeadCustom from '../../components/head';
import Card from '../../components/card';

class Belajar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          image:
            'https://ceylonvegetable.com/wp-content/uploads/2020/05/16438126-7276481-image-a-3_1563970957529.jpg',
          alphabet: 'A',
          sound: 'Hallo.mp3',
        },
        {
          image:
            'https://non-indonesia-distribution.brta.in/2020-04/17a1e5c137dab55c0ca6860571706698d59185cf.jpg',
          alphabet: 'B',
          sound: 'B.mp3',
        },
        {
          image: 'https://kumpulanilmu.com/wp-content/uploads/2019/05/fakta-unik-Cumi-cumi.jpg',
          alphabet: 'C',
          sound: 'C.mp3',
        },
        {
          image:
            'https://asset.kompas.com/crops/jglhOjivGnsycy3U10Q9zl2mFow=/0x39:676x490/750x500/data/photo/2020/02/20/5e4e5b40c6428.jpg',
          alphabet: 'D',
          sound: 'D.mp3',
        },
        {
          image:
            'https://cdn2.boombastis.com/wp-content/uploads/2017/06/Apakah-Kamu-Seekor-Elang.jpg',
          alphabet: 'E',
        },
        {
          image:
            'https://lh3.googleusercontent.com/proxy/Aaf9d4-ou_qV4t2dhHITeMqgUduv7OI8LG9kTH_s_OgDkiZ775a2tRJtrmgC_N0-7B63hqytb1ragrKbhzJPWRn33jUseemkCNWX1uXUkDuRHVeRPVQZSRrFuF_TckZtQ_JGutAyMz0',
          alphabet: 'F',
        },
        {
          image:
            'https://api.jatimnet.com/jinet/assets/media/filer_public/13/8f/138f2ac6-b3e8-403d-9d49-99944417e70a/gajah_1.jpg',
          alphabet: 'G',
        },
        {
          image:
            'https://ichef.bbci.co.uk/news/640/cpsprodpb/1268F/production/_105870457_harimau01.jpg',
          alphabet: 'H',
        },
        {
          image: 'https://tabloidsinartani.com/uploads/news/images/770x413/-_190308183842-912.jpg',
          alphabet: 'I',
        },
        {
          image:
            'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/haifoto/original/80742_jerapah.JPG',
          alphabet: 'J',
        },
        {
          image:
            'https://m.ayojakarta.com/images-jakarta/post/articles/2020/04/20/15923/kucing_ilustrasi.jpg',
          alphabet: 'K',
        },
        {
          image:
            'https://i2.wp.com/sainspop.com/wp-content/uploads/2018/08/honey-bees-326337_1920.jpg?fit=1920%2C1281&ssl=1',
          alphabet: 'L',
        },
        {
          image: 'https://img.harianjogja.com/posts/2020/06/23/1042570/ilustrasi-monyet.jpg',
          alphabet: 'M',
        },
        {
          image: 'https://www.gooddoctor.co.id/wp-content/uploads/2020/06/manfaat-buah-nanas.jpg',
          alphabet: 'N',
        },
        {
          image:
            'https://asset.kompas.com/crops/mKc04Q82oMDAt8e8nsRF4b7pdCk=/0x0:0x0/750x500/data/photo/2020/04/22/5ea002025d911.jpg',
          alphabet: 'O',
        },
        {
          image:
            'https://static.scientificamerican.com/sciam/cache/file/ACF0A7DC-14E3-4263-93F438F6DA8CE98A_source.jpg',
          alphabet: 'P',
        },
      ],
    };
  }
  render() {
    const data = this.state.data;
    return (
      <>
        <HeadCustom />
        <Nav />
        <div className='py-10 px-8 lg:px-20'>
          <h1 className='text-font text-2xl text-center text-accent-1 mb-8'>
            Belajar Huruf dengan Gambar
          </h1>
          <div className='grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 my-0 mx-auto'>
            {data.map(({ image, alphabet, sound }) => (
              <Card key={image} image={image} alphabet={alphabet} sound={sound} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Belajar;
