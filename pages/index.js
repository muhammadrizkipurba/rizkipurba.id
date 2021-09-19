import BaseLayout from '../components/Layout/BaseLayout'
import CustomHead from '../components/Reusable/CustomHead'

export default function Home() {
  return (
    <div className='container mx-auto'>
      <CustomHead
        title='Muhammad Rizki Purba | Web developer'
        description="Portfolio website of Muhammad Rizki Purba"
      >
        <link rel="canonical" href="https://rizkipurba.id/" />
        <meta property="og:url" content="https://rizkipurba.id/" />
      </CustomHead>

      <BaseLayout>
        <main className='main'>
          <h1>Welcome to my website</h1>
          <p>Hi guys, my name is Muhammad Rizki Purba. I am a React Developer at PT. Whello Indonesia Prima</p>
        </main>
      </BaseLayout>
    </div>
  )
}
