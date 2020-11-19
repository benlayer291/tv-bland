import TheLayout from '../components/theLayout/theLayout'
import StarRating from '../components/starRating/starRating'
import BaseSection from '../components/baseSection/baseSection'
import StyleguideColors from '../components/styleguideColors/styleguideColors'

const Styleguide: React.FunctionComponent = () => {
  return (
    <TheLayout>
      <BaseSection>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellat
          voluptate maiores quasi rem! Optio assumenda, nisi dolorem ipsum
          expedita soluta consectetur, nulla iure porro quam alias, quas quasi
          voluptatum!
        </p>
      </BaseSection>

      <BaseSection>
        <StyleguideColors
          colors={['#ffffff', '#000000', '#929292', '#db291d']}
        />
      </BaseSection>

      <BaseSection>
        <StarRating rating={2} />
        <StarRating rating={10} withText isLarge />
      </BaseSection>
    </TheLayout>
  )
}

export default Styleguide
