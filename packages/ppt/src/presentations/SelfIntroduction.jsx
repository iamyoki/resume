import { css } from '@emotion/react'
import avatar from 'assets/avatar.jpeg'
import reoil from 'assets/Reoil.png'
import reoil2 from 'assets/Reoil2.png'
import Center from 'components/Center'
import useSocket from 'hooks/useSocket'
import React from 'react'
import bili1 from 'assets/bilibili/bili-1.png'
import bili2 from 'assets/bilibili/bili-2.png'
import bili5 from 'assets/bilibili/bili-5.png'
import wangke from 'assets/wangke.png'
import cct from 'assets/cct.png'
import cctcli from 'assets/cct-cli.png'
import cctcliGif from 'assets/cct-cli.gif'
import popularImage from 'assets/popularImage.png'
import popular from 'assets/popular.png'
import gotodo from 'assets/gotodo.png'
import gotodoCli from 'assets/gotodo-cli.png'
import gotodoCliGif from 'assets/gotodo-cli.gif'
import {
  Appear,
  Box,
  FlexBox,
  Heading,
  Image,
  Link,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Quote,
  Slide,
  Text,
  UnorderedList,
} from 'spectacle'

function SelfIntroduction() {
  useSocket()

  return (
    <>
      <Slide>
        <Appear>
          <FlexBox justifyContent='flex-start'>
            <Box display='inline-flex' borderRadius={200} overflow='hidden'>
              <Image src={avatar} size={30} />
            </Box>
            <Text fontSize={18} color='primary' fontWeight='normal'>
              Design, Code, No need to sleep.
            </Text>
          </FlexBox>
        </Appear>

        <Center>
          <Heading>于谦的字节跳动面试演示稿👨‍💻‍</Heading>
        </Center>

        <Appear>
          <Text textAlign='center' fontSize={20}>
            Made by Yoki Yu. <br /> Using{' '}
            <Link
              fontSize='inherit'
              href='https://www.npmjs.com/cra-template-popular'>
              React Popular
            </Link>{' '}
            &{' '}
            <Link
              fontSize='inherit'
              href='https://formidable.com/open-source/spectacle'>
              Spectacle
            </Link>
          </Text>
        </Appear>
      </Slide>

      <Slide>
        <Center>
          <Heading lineHeight={1.4}>
            为了各位面试官大佬的体验
            <Appear>请允许我允许花几分钟🙋🏻</Appear>
            <Appear>通过编写的ppt介绍我自己</Appear>
          </Heading>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Heading>一些基本信息</Heading>
          <Appear>
            <UnorderedList>
              <ListItem>毕业于省重点长沙理工大学 数字媒体艺术设计专业</ListItem>
              <ListItem>
                设计+计算机双学位，but中途放弃计算机，自学成才
              </ListItem>
              <ListItem>ENTP型智多星人格，解决问题能力强 思维灵活</ListItem>
              <ListItem>25岁黄金年龄</ListItem>
              <ListItem>兴趣爱好是开源项目</ListItem>
            </UnorderedList>
          </Appear>
        </Center>
      </Slide>

      {/* <Slide>
        <Center>
          <Heading>2021-至今</Heading>
          <Appear>
            <Text color='yellow' fontWeight='bold' textAlign='center'>
              深圳前海数据 前端Leader 高级前端工程师 架构师
            </Text>
            <Text fontSize={30}>
              负责前端数据核心产品线前端团队。负责重构老项目，设计符合公司业务需求的新型前端架构。
              <br />
              负责数图新智大数据产品、贵州领导驾驶舱(国家级项目)、罗湖一企一策、经济大脑从0到1的研发工作。
            </Text>
          </Appear>
        </Center>
      </Slide> */}

      <Slide>
        <Center>
          <Heading>我是设计师</Heading>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <UnorderedList>
            <ListItem>
              14-18年 长沙理工大学 设计艺术学院
              数字媒体艺术设计专业，毕业设计获一等奖
            </ListItem>

            <Appear>
              <ListItem>
                18年格力国家级工业设计中心 交互设计师,
                曾获得两项关于折叠屏的发明专利
              </ListItem>
            </Appear>
          </UnorderedList>
        </Center>
      </Slide>

      {/* <Slide>
        <Center>
          <Heading>我是专业的前端</Heading>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <UnorderedList>
            <ListItem>15年开始自学前端 7年开发经验</ListItem>
            <Appear>
              <ListItem>前几年专注表现层的前端技术 精通各种动效实现</ListItem>
            </Appear>
            <Appear>
              <ListItem>艺术生的毕业设计超越计算机学院</ListItem>
            </Appear>
          </UnorderedList>
        </Center>
      </Slide> */}

      <Slide>
        <Center>
          <Heading>我是开源开发者</Heading>
          <p>
            开源过Reoil、Boxbase、Create Cra
            Template等十余项开源项目，今年Reoil项目得到AlloyTeam内部关注
          </p>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <OrderedList>
            <ListItem>
              <Link href='https://github.com/iamyoki/create-cra-template'>
                Create Cra Template
              </Link>
              <Text>基于你当前的React项目生成脚手架的一款CLI工具</Text>
            </ListItem>
            <ListItem>
              <Link href='https://github.com/iamyoki/create-cra-template'>
                Cra Template Popular
              </Link>
              <Text>基于社区流行解决方案的React脚手架模板</Text>
            </ListItem>
            <ListItem>
              <Link href='https://github.com/iamyoki/create-cra-template'>
                Reoil
              </Link>
              <Text>React 原子组件库，下一代CSS in JS解决方案</Text>
            </ListItem>
            <ListItem>
              <Link href='https://github.com/iamyoki/create-cra-template'>
                Gotodo
              </Link>
              <Text>面向开发者的一款待办清单工具</Text>
            </ListItem>
          </OrderedList>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Heading>我是B站Up主(科技版块教学视频)</Heading>
          <p>
            评论区所称的大神,
            以Webpack工程化和React工程化为主的教学视频，曾上搜索首页
          </p>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Image src={bili1} />
          <Box p={2} />
          <Image size={400} src={bili5} />
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Image src={bili2} height='80vh' />
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Heading>我是现在团队的前端Leader</Heading>
          <p>
            前海数据核心产品线负责人，负责前端架构设计、数据可视化解决方案、BI原子化解决方案
          </p>
        </Center>
        <Notes>打造行业最牛逼的BI解决方案</Notes>
        <Notes>
          曾在五月份的贵州项目中吊打了阿里的团队，贵州省统计局领导现场点名要阿里团队向我们学习，主要还是前端的功劳
        </Notes>
      </Slide>

      <Slide>
        <Center>
          <Heading>
            我是虎课网高级React讲师
            <br />
            小鹿线就业班高级React讲师
          </Heading>
          <p>教是最好的学</p>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Image height='80vh' src={wangke} />
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Heading>
            精通Typescript React Vue Nextjs Nodejs Koa Jamstack MERNstack技术栈
          </Heading>
        </Center>
      </Slide>
      <Slide>
        <Center>
          <Heading>
            精通组件设计模式(Component Design
            Pattern)，灵活运用设计模式编写高质量组件
          </Heading>
        </Center>
      </Slide>
      <Slide>
        <Center>
          <Heading>精通设计与编写原子化组件</Heading>
        </Center>
      </Slide>
      <Slide>
        <Center>
          <Heading>
            精通styled-components, emotion, styled-jsx, reoil等CSS in JS解决方案
          </Heading>
        </Center>
      </Slide>
      <Slide>
        <Center>
          <Heading>
            精通Nextjs Gatsby React-Static, 了解React server component 等SSR SSG
            CSR, ISR, NSR, Graphql, Appolo 等Jamstack新型架构解决方案
          </Heading>
        </Center>
      </Slide>
      <Slide>
        <Center>
          <Heading>
            精通PC到移动端自适应解决方案，精通暗黑模式主题切换解决方案，精通Electron跨端解决方案,
            了解React Native和Flutter
          </Heading>
        </Center>
      </Slide>
      <Slide>
        <Center>
          <Heading>
            精通CSS (css才是世界上最难的语言，但是我可能是最精通的人之一)
          </Heading>
        </Center>
      </Slide>
      <Slide>
        <Center>
          <Heading>
            精通动效解决方案 framer-motion react-spring anime.js GSAP
          </Heading>
        </Center>
      </Slide>
      <Slide>
        <Center>
          <Heading>能够独立编写React、Vue脚手架和命令行工具</Heading>
        </Center>
      </Slide>
      <Slide>
        <Center>
          <Heading>
            精通Nodejs cli, 精通express, koa
            能够编写高质量RESTful和Graphql规范接口
          </Heading>
        </Center>
      </Slide>
      <Slide>
        <Center>
          <Heading>
            精通Babel, Typescript, Rollup, Webpack项目工程化构建
          </Heading>
        </Center>
      </Slide>
      <Slide>
        <Center>
          <Heading>
            精通制定代码规范与集成 Eslint, Prettier, Githook + Huksy +
            ConventionalCommits, Lerna, Yarn workspace, CHANGELOG.md, scripts
            规范代码
          </Heading>
        </Center>
      </Slide>
      <Slide>
        <Center>
          <Heading>
            熟悉Vercel CICD, Jenkins, Circle CICD, Travis CICD, Github Actions,
            Gitlab CICD持续交付部署方案
          </Heading>
        </Center>
      </Slide>
      <Slide>
        <Center>
          <Heading>
            了解Jest测试工具, 精通Postman json-server Mockjs开发工具, 精通React
            Devtool, Chrome Devtool, Chrome Devtool for vscode, Vue
            Devtool等开发者调试工具
          </Heading>
        </Center>
      </Slide>
      <Slide>
        <Center>
          <Heading>
            善于研究解决方案，善于查阅学习大量行业优秀解决方案，乐于投入到开源项目中不断沉淀并迭代进化
          </Heading>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Heading>接下来直接讲讲项目吧 👏</Heading>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Heading>1. Reoil</Heading>
          <Quote fontSize={30}>
            这是一个原子UI样式库 下一代css in js解决方案 - css in props <br />
            它解决的是样式和逻辑的范式问题 <br />
          </Quote>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Image src={reoil} />
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Image src={reoil2} />
        </Center>
      </Slide>

      <Slide>
        <Center>
          <iframe
            src='https://codesandbox.io/embed/reoil-demo-rz0sj?autoresize=1&fontsize=14&initialpath=%2Fbutton&module=%2Fsrc%2Fpages%2FButtonPage.jsx&theme=dark'
            style={{
              width: '100%',
              height: '500px',
              border: 0,
              borderRadius: 4,
              overflow: 'hidden',
            }}
            title='reoil-demo'
            allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
            sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
          />
        </Center>
      </Slide>

      <Slide>
        <Center>
          <iframe
            src='https://codesandbox.io/embed/reoil-ts-demo-32cwm?fontsize=14&hidenavigation=1&theme=dark'
            style={{
              width: '100%',
              height: '500px',
              border: 0,
              borderRadius: 4,
              overflow: 'hidden',
            }}
            title='reoil-demo'
            allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
            sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
          />
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Heading>2. Create Cra Template</Heading>
          <Image
            height='20vh'
            src='https://camo.githubusercontent.com/f7cad46c4cfaba2bd6398d749ab22e990b6058a31459ea758c29745f880f859f/68747470733a2f2f692e706f7374696d672e63632f52466b59587333422f446179666c6f772d426c61636b2d4361742e706e67'
          />
          <Quote fontSize={30}>
            A cli tool to generate cra-template from current create-react-app
            project.
            <br />
            <br />
            从你当前的React项目生成React脚手架模板
          </Quote>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Image src={cct} />
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Image height='80vh' src={cctcli} />
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Image height='80vh' src={cctcliGif} />
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Heading>3. Cra Template Popular</Heading>
          <Image height='40vh' src={popularImage} />
          <Quote fontSize={30}>
            A CRA template with the most popular libraries installed.
            <br />
            <br />
            一个集成了社区流行解决方案的React脚手架模板
          </Quote>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Image src={popular} />
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Heading>4. Gotodo 💡</Heading>
          <Quote fontSize={30}>
            面向开发者的一款方便开发者在项目源码内建立todolist待办清单的工具。
          </Quote>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Image src={gotodo} />
        </Center>
      </Slide>

      <Slide>
        <Box overflowY='auto'>
          <Markdown fontSize={20}>{`
          # Gotodo
          
          一款方便开发者在项目源码内建立todolist待办清单的工具。
          
          ## 功能介绍
          ### 添加待办 💡
          有三种方式可以添加待办： 命令行、web端图形化工具、桌面端。
          命令行 - 通过\`gotodo add <待办事项>\`即可添加
          web端、桌面端 - 通过交互界面添加
          任何添加操作将会同步生成TODO.md文件，如果是建立了分组将会按文件目录生成todos/[组名].todo.md
          示例：
          \`\`\`shell
          gotodo add 'Add a custom hook' to 'v2'
          # 生成 todos/v2.todo.md
          \`\`\`
          
          ### 同步 📡
          同步功能贯穿了 命令行、图形界面、生成文件、成员协作 4个方面
          - 任何通过工具增删改查编辑的待办内容将会同步修改生成的todo.md文件，手动修改md文件也会同步更新到界面上
          - 在同一项目内第一次启动的待办会生成一个session key, 任何成员只要是在同一项目内通过同一个session key启动的待办app会通过我们的websocket代理服务实时同步更，这个同步过程是自动的 用户不需要登录鉴权
          
          ### 导入&导出 📂
          可以将gotodo导出为PDF .md png svg等格式
          如果是文档格式如PDF .md text 甚至剪切板 则可以导入成gotodo的待办清单
          （考虑做一个gotodo自己的源文件格式比如 xxx.gtd，优先用主流标准）
          
          ### 通知提醒 🔔
          利用Web Notification API 通过浏览器创建提醒 或者通过桌面端应用提醒，点击通知即可打开对应项目
          但如果是浏览器通知如果是本地的localhost没有打开这个项目是不会有通知的，所以这个还需要想一想通知方案，看是不是可以调用系统日历建立提醒，或者说开一个系统启动服务常驻起来
          
          ## Packages
          ### gotodo
          所有包的集合包, 与core同步
          ### @gotodo/core
          所有包的集合包
          ### @gotodo/web
          gotodo react web端应用
          ### @gotodo/desktop
          gotodo react 桌面端应用 window mac linux
          ## @gotodo/cli
          gotodo cli工具
          ### @gotodo/server
          gotodo websocket服务 同步数据
          ### @gotodo/generator
          导出生成TODO.md文件，也可以反向导入生成gotodo
          
          ## 问题记录
          > 1. 同步权限
          > 2. Md语法解析
        `}</Markdown>
        </Box>
      </Slide>

      <Slide>
        <Center>
          <Image height='80vh' src={gotodoCli} />
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Image height='80vh' src={gotodoCliGif} />
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Heading fontSize='h3'>Gotodo is still work in progress...</Heading>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Heading>5. picture-cli</Heading>
          <Quote fontSize={30}>
            一键随机生成一万张图片的CLi工具
            <br />
            A powerful user-friendly image processing tool <br />
            <br />
            ❤️ Generate pictures: picture-cli helps you get countless pictures
            easily. <br /> <br />
            💻 Generate img tag: Auto generate HTML {`<img />`} tag with wrapper
            and copy to clipboard. <br /> <br />
            🔥 Extremely fast, 10ms per picture I guarantee! <br /> <br />
            👏 Upload: upload your image online then return an URL
          </Quote>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <FlexBox>
            <Image
              height='50vh'
              src='https://i.loli.net/2020/05/26/KGTnWzs3PmLk29M.gif'
            />
            <Image
              height='50vh'
              src='https://i.loli.net/2020/06/01/4Wk1s762V8YASiv.gif'
            />
          </FlexBox>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Heading>6. linesof</Heading>
          <Quote fontSize={30}>一款统计代码行数的命令行工具</Quote>
          <Image
            height='50vh'
            src='https://camo.githubusercontent.com/8d4ff6227db2bd54d3760c2ec8ee4b11f87badff0bda2d294612a6ccd5790ec0/68747470733a2f2f692e6c6f6c692e6e65742f323032302f30362f30352f3258544a574c77345156787a6a37662e676966'
          />
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Heading>7. Parallaxing.js</Heading>
          <Quote fontSize={30}>视差滚动效果Js轻量库</Quote>
          <Image
            height='50vh'
            src='https://i.postimg.cc/C1T6C2dV/parallaxing-preview.gif'
          />
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Heading>8. CGHKWeb</Heading>
          <Image src='http://v2.cghk.com/logo.svg' />
          <Quote fontSize={30}>
            Jamstack with Nextjs+Typescript+Reoil+Strapi
          </Quote>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Heading fontSize='h3' margin={0}>
            BTW: 这个ppt也是用代码写的
          </Heading>

          <Appear>
            <Heading>所用到的技术栈有</Heading>
          </Appear>
          <Appear>
            <OrderedList
              css={css`
                display: flex;
                flex-wrap: wrap;
              `}>
              <Text>React</Text>
              <Text>Nextjs</Text>
              <Text>Lerna Monorepo</Text>
              <Text>Spectacle</Text>
              <Text>Socket.io</Text>
              <Text>Typescript</Text>
            </OrderedList>
          </Appear>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <FlexBox>
            <Heading fontSize='h3'>Github</Heading>
            <Link href='https://github.com/iamyoki/resume'>
              https://github.com/iamyoki/resume
            </Link>
          </FlexBox>
          <FlexBox>
            <Heading fontSize='h3'>Online</Heading>
            <Link href='https://github.com/iamyoki/resume'>
              https://bytedance.vercel.app/
            </Link>
          </FlexBox>
        </Center>
      </Slide>
    </>
  )
}

export default SelfIntroduction
