Este es un paquete de pruebas de despliegue en NPM

### Christian Camacho

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'cscg-product-card';
```

```
<ProductCard
product={product}
key={product.id}
initialValues={{
          count: 4,
          maxCount: 10,
        }} >
{({ reset, increaseBy, count, isMaxCountReached }) => (
<>
<ProductImage />
<ProductTitle />
<ProductButtons />
</>
)}
</ProductCard>
```