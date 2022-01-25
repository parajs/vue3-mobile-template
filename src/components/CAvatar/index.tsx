import { SetupContext } from 'vue';
import styles from './index.module.css';

interface CAvatarProps {
  size?: number | string;
  color?: string;
  src?: string;
  text?: string;
}

/**
 * 头像
 * @returns
 */
export default function CAvatar(props: CAvatarProps, context: SetupContext) {
  const { slots } = context;
  const { size = 30, color = '#6476FF', src, text } = props;
  return (
    <div
      class={styles.avatarBox}
      style={{
        backgroundColor: color,
        height: `${size}px`,
        width: `${size}px`
      }}
    >
      {slots.default ? slots.default() : src ? <img src={src} /> : text}
    </div>
  );
}
