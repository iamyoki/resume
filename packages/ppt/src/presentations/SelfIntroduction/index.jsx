import avatar from 'assets/avatar.jpeg'
import Center from 'components/Center'
import theme from 'presentations/theme'
import {
  Appear,
  Box,
  Deck,
  FlexBox,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Progress,
  Slide,
  Text,
} from 'spectacle'

function SelfIntroduction() {
  return (
    <Deck theme={theme}>
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
            <Appear>通过预先准备的ppt介绍我自己</Appear>
          </Heading>
        </Center>
      </Slide>

      <Slide>
        <Heading fontSize='h2'>我将通过这几个方面来介绍：</Heading>
        <OrderedList>
          <ListItem>快速了解于谦</ListItem>
          <ListItem>产品思维和设计能力</ListItem>
          <ListItem>产品思维和设计能力</ListItem>
        </OrderedList>
      </Slide>
    </Deck>
  )
}

export default SelfIntroduction
