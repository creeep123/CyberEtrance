import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Icon,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import iconDict from './iconDict.js';
import Link from 'next/link';

export default function Card(props) {
  const { projectInfo } = props;
  const { id, IMAGE, NAME, github, address, type, techStack } = projectInfo;
  const getTechStackIcons = (techStack) => {
    // 把 techStack 从字符串数组变成一个装有【icon组件】的数组
    return techStack.map((tech) => {
      if (iconDict[tech] != undefined) {
        return <Icon boxSize={'1.5em'} as={iconDict[tech]} />;
      }
    });
  };

  return (
    <Center py={12} key={id}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'md'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'lg'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Link href={`intro/${NAME}`}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={IMAGE}
            />
          </Link>
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {type}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {NAME}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            {/* <Text fontWeight={800} fontSize={'xl'}>
              $57 
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text> */}
            <a href={address}>
              <Icon focusable={true} boxSize={'1.5em'} as={GrView} />
            </a>
            &npsb;
            <a href={github}>
              <Icon focusable={true} boxSize={'1.5em'} as={FaGithub} />
            </a>
            {getTechStackIcons(techStack)}
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
