import TheHomeHero from '../components/theHomeHero/theHomeHero'
import ShowSchedule from '../components/showSchedule/showSchedule'
import BaseSection from '../components/baseSection/baseSection'
import TheLayout from '../components/theLayout/theLayout'

const Home: React.FunctionComponent = () => {
  return (
    <TheLayout home>
      <TheHomeHero />
      <BaseSection>
        <ShowSchedule shows={Array(16).fill(null)} />
      </BaseSection>
    </TheLayout>
  )
}

export default Home
