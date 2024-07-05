import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGride'
import { gridItems } from '@/data'

const Gride = () => {
  return (
   <section id="about">
      <BentoGrid>
        {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              img={img}
              className={className}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
        ))}
      </BentoGrid>
   </section>
  )
}

export default Gride