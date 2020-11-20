import { UAParser } from 'ua-parser-js'
import { GetServerSideProps, NextPage } from 'next'
import { getDatabaseConnection } from 'lib/getDatabaseConnection'

type Props = {
  browser: {
    name: string;
    version: string;
    major: string;
  }
}

const index: NextPage<Props> = (props) => {
  const { browser } = props
  return (
    <div>
      <h1>你的浏览器是{browser.name}</h1>
    </div>
  )
}

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const connect = await getDatabaseConnection()// 第一次链接能不能用 get
  console.log('connect');
  const ua = context.req.headers['user-agent']
  const result = new UAParser(ua).getResult();
  return {
    props: {
      browser: result.browser
    }
  }
}
