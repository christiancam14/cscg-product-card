import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('Pruebas en ProductTitle', () => {
  test('Debe aparecer el titulo', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom Product" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <ProductTitle title="Custom Product" />}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
