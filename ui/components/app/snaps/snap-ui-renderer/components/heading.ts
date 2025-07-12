 import { HeadingElement } from '@dafjiapp/snaps-sdk/jsx';
import { OverflowWrap, TextVariant } from '../../../../../helpers/constants/design-system';
import { UIComponentFactory } from './types';

const sizeMap = { sm: TextVariant.headingSm, md: TextVariant.headingMd, lg: TextVariant.headingLg };

const generateSize = (size) => sizeMap[size] ?? TextVariant.headingSm;

export const heading: UIComponentFactory<HeadingElement> = ({ element }) => ({ element: 'Text', children: element.props.children, props: { variant: generateSize(element.props.size), overflowWrap: OverflowWrap.Anywhere } });
