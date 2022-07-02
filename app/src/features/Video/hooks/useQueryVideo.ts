import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import {
  GetAdultVideoByIdDocument,
  GetAdultVideoByIdQuery,
} from '../../../graphql/generated';

/**
 * ビデオ情報を取得するフック
 * @returns レスポンスデータ、エラー、ローディングフラグ
 */
export const useQueryVideo = () => {
  const router = useRouter();

  const { data, error, loading } = useQuery<GetAdultVideoByIdQuery>(
    GetAdultVideoByIdDocument,
    { variables: { id: router.query.id } },
  );
  return { data, error, loading };
};
