import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product1, product2 } from '../data/products';

describe('Pruebas en ProductImage', () => {
  test('Debe aparecer el titulo', () => {
    const wrapper = renderer.create(<ProductImage img={product2.img} />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <ProductImage img={product2.img} />}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
