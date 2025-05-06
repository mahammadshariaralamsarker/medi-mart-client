import ShopManage from '@/components/modules/shop';
import React from 'react'
type TSearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const ShopPage = ({ searchParams }: { searchParams: TSearchParams }) => {
  return (
    <div>
      <ShopManage searchParams={searchParams} />
    </div>
  );
};

export default ShopPage
