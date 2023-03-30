import { useColorModeValue, Button } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const SimpleButton = ({
  onClick,
  text,
  mr,
}: {
  onClick: () => void;
  text: string;
  mr?: string;
}) => {
  return (
    <Button
      mr={mr}
      px="10px"
      h="32px"
      fontWeight="600"
      fontSize="14px"
      bg="#EEF2F8"
      color="#697584"
      onClick={onClick}
      borderRadius="4px"
      _hover={{
        opacity: 0.8,
      }}
      _active={{
        opacity: 0.8,
      }}
    >
      {text}
    </Button>
  );
};

export const NormalButton = ({
  type,
  size,
  onClick,
  text,
  mr,
  disabled,
  isLoading = false,
}: {
  type: 'solid' | 'outline';
  size: { w: string; h: string };
  onClick: () => void;
  text: string;
  mr?: string;
  disabled?: boolean;
  isLoading?: boolean;
}) => {
  const baseStyle = {
    solid: {
      color: useColorModeValue('#FFF', '#1D2024'),
      backgroundColor: useColorModeValue('#2C3137', '#EEF2F8'),
    },
    outline: {
      color: useColorModeValue('#2C3137', '#EEF2F8'),
      border: `2px solid ${useColorModeValue('#2C3137', '#EEF2F8')}`,
      backgroundColor: 'transparent',
    },
  };

  const isDisabledState = isLoading || disabled;

  return (
    <Button
      mr={mr}
      w={size.w}
      h={size.h}
      isDisabled={isDisabledState}
      fontWeight="600"
      fontSize="14px"
      css={{ ...baseStyle[type] }}
      onClick={onClick}
      borderRadius="4px"
      isLoading={isLoading}
      _hover={{
        opacity: isDisabledState ? 0.6 : 0.8,
      }}
      _active={{
        opacity: isDisabledState ? 0.6 : 0.8,
      }}
      _disabled={{
        opacity: 0.6,
        cursor: 'not-allowed',
      }}
    >
      {text}
    </Button>
  );
};

export const LargeButton = ({
  width,
  btnText,
  isLoading,
  handleClick,
  disabled,
  btnContent,
}: {
  width: string;
  btnText?: string;
  btnContent?: ReactNode;
  isLoading: boolean;
  handleClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <Button
      isLoading={isLoading}
      isDisabled={isLoading || disabled}
      onClick={handleClick}
      _hover={{
        opacity: isLoading || disabled ? 1 : 0.9,
      }}
      _active={{
        opacity: isLoading || disabled ? 1 : 0.9,
      }}
      _disabled={{
        cursor: 'not-allowed',
        background: '#CBD3DD',
        color: '#697584',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
      }}
      w={width}
      h="68px"
      bgColor={useColorModeValue('#2C3137', '#EEF2F8')}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.3)"
      borderRadius="6px"
      fontWeight="semibold"
      fontSize="18px"
      color={useColorModeValue('#FFF', '#1D2024')}
    >
      {btnText ? btnText : btnContent}
    </Button>
  );
};
