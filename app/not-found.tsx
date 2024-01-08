import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="global text-center">
      <h1 className="pt-9 text-center">404 Page Not Found</h1>
      <p>The requested page was not found on this server. </p>
      <p>Please, make sure you have typed the current URL</p>
      <img
        style={{
          margin: 'auto',
          paddingTop: '30px',
          paddingBottom: '30px',
        }}
        className="col-md-3"
        src="/images/onurtaskiran404.png"
        alt="onurtaskiran"
      />
      <Link href="/">Return Home</Link>
    </div>
  );
}
