<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-server](./kibana-plugin-server.md) &gt; [IContextHandler](./kibana-plugin-server.icontexthandler.md)

## IContextHandler type

A function registered by a plugin to perform some action.

<b>Signature:</b>

```typescript
export declare type IContextHandler<TContext extends {}, TReturn, THandlerParameters extends any[] = []> = (context: TContext, ...rest: THandlerParameters) => TReturn;
```

## Remarks

A new `TContext` will be built for each handler before invoking.
