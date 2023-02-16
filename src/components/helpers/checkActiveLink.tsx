import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

export const CheckActiveLink = (endpoint) => {
  useEffect(() => {})
  const router = useRouter();
  const pathName = router.pathname;
  if(pathName === '/cart'){
    return 'activeCart'
  } else if(pathName.match(endpoint)){
    return 'link-active'
  } else
  return 'my-auto hover:font-semibold mx-[16px] lg:mx-[27px]'
}

export default CheckActiveLink;
