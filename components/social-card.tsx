import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import SocialLinks from './social-links';

function SocialCard() {
  return (
    <Card className='w-[400px]'>
      <CardHeader className='items-center'>
        <Avatar className='h-24 w-24'>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardTitle>Jessica Randall</CardTitle>
        <CardDescription>London, United Kingdom</CardDescription>
      </CardHeader>
      <CardContent>
        <SocialLinks />
      </CardContent>
    </Card>
  );
}

export default SocialCard;
