import { Alerts } from '@/icons/categories/Alerts';
import { Arrow } from '@/icons/categories/Arrow';
import { Communication } from '@/icons/categories/Communication';
import { Editor } from '@/icons/categories/Editor';
import { Files } from '@/icons/categories/Files';
import { Finance } from '@/icons/categories/Finance';
import { General } from '@/icons/categories/General';
import { Layout } from '@/icons/categories/Layout';
import { Maps } from '@/icons/categories/Maps';
import { Media } from '@/icons/categories/Media';
import { Medical } from '@/icons/categories/Medical';
import { Security } from '@/icons/categories/Security';
import { Shapes } from '@/icons/categories/Shapes';
import { Time } from '@/icons/categories/Time';
import { Users } from '@/icons/categories/Users';

export interface Icon {
  width: number;
  height: number;
  color: string;
}

export interface IconType {
  Alerts: typeof Alerts;
  Arrow: typeof Arrow;
  Communication: typeof Communication;
  Editor: typeof Editor;
  Files: typeof Files;
  Finance: typeof Finance;
  General: typeof General;
  Layout: typeof Layout;
  Maps: typeof Maps;
  Media: typeof Media;
  Medical: typeof Medical;
  Security: typeof Security;
  Shapes: typeof Shapes;
  Time: typeof Time;
  Users: typeof Users;
}
