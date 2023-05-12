import { SVGProps } from "react";

export default function TaikaiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="180"
      height="50"
      fill="none"
      viewBox="0 0 180 50"
      aria-labelledby="taikaiTitle"
      role="img"
      {...props}
    >
      <title id="taikaiTitle">TAIKAI</title>
      <path
        fill="#140C32"
        d="M78.229 50h-6.702V0h6.702v50zM179.411 50h-6.702V0h6.702v50zM90.532 50h-6.696V0h6.696v50zM121.463 50h-6.359l-.075-.076-18.103-18.633 5.473-5.24 19.064 20.153V50zM93.968 29.376v-9.352L115.046 0h5.759v3.727l-.082.075-26.755 25.574zM31.71 50h-5.653v-3.546L59.543.017h6.58v29.47h-6.702v-18.4L31.711 50z"
      ></path>
      <path
        fill="#140C32"
        d="M66.123 50h-6.702V39.21H43.484l4.734-6.306h17.923L66.123 50zM12.49 6.306H0V0h12.49v6.306zM22.627 50H15.92V0h20.526v6.306H22.627V50zM129.312 50h-5.561v-4.047l17.101-38.558 3.756 8.059-.052.11L129.312 50zM161.721 29.207h-7.412L142.745 3.22 144.177 0h4.548l12.996 29.207zM169.256 50h-5.689l-4.932-11.063h-20.653l2.742-6.295h22.529l6.003 13.51V50z"
      ></path>
    </svg>
  );
}
