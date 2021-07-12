import { css } from '@emotion/react'
import avatar from 'assets/avatar.jpeg'
import Center from 'components/Center'
import useSocket from 'hooks/useSocket'
import React from 'react'
import reoil from 'assets/Reoil.png'
import reoil2 from 'assets/Reoil2.png'
import {
  Appear,
  Box,
  FlexBox,
  Grid,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Progress,
  Quote,
  Slide,
  Text,
  UnorderedList,
} from 'spectacle'
import { rgba } from 'polished'

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
        <Progress />
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
              <ListItem>兴趣爱好以前是游戏，现在只有开源项目</ListItem>
            </UnorderedList>
          </Appear>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Heading>我是设计师</Heading>
          <p>2011年-2019年设计经验, 曾任视觉、UI、交互设计 产品经理</p>
        </Center>
      </Slide>

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
          <Heading>我是B站Up主(科技版块教学视频)</Heading>
          <p>
            评论区所称的大神,
            以Webpack工程化和React工程化为主的教学视频，曾上搜索首页
          </p>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Heading>我是现在工作中的前端Leader</Heading>
          <p>
            前海数据核心产品线负责人，负责前端架构设计、数据可视化解决方案、BI原子化解决方案
          </p>
        </Center>
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
          <Heading>稍微看一下设计作品。。。</Heading>
        </Center>
      </Slide>

      <Slide>
        <Center>
          <Heading>接下来直接讲讲项目吧</Heading>
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
