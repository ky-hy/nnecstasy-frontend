import { render } from '@testing-library/react';
import { GraphQLHandler, GraphQLRequest } from 'msw';

import { Provider } from '@/components/uniqueParts/Provider';

import { server } from '../../mocks/server';

/**
 * レンダリングするための設定
 * @param children レンダリングしたいコンポーネント
 * @returns render: レンダリングするコールバック
 */
export const setRenderComponent = (children: React.ReactNode) => {
  return {
    /**
     * レンダリングをする
     *
     * @param responseOverride 上書きしたAPI定義
     *
     * ```ts
     * // 使用例
     * import { graphql } from 'msw';
     * render(graphql.query(GetTodosDocument, (req, res,ctx) => {} ));
     * ```
     */
    render: (responseOverride?: GraphQLHandler<GraphQLRequest<never>>) => {
      if (responseOverride) {
        server.use(responseOverride);
      }
      render(<Provider>{children}</Provider>);
    },
  };
};
