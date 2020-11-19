import ShowHero from '../../components/showHero/showHero'
import BaseSection from '../../components/baseSection/baseSection'
import TheLayout from '../../components/theLayout/theLayout'
import ShowInfo from '../../components/showInfo/showInfo'

const Home: React.FunctionComponent = () => {
  return (
    <TheLayout>
      <ShowHero />
      <BaseSection>
        <ShowInfo />
      </BaseSection>
    </TheLayout>
  )
}

export default Home
