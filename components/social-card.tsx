import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import SocialLinks from './social-links';
import { Button } from './ui/button';

function SocialCard() {
  return (
    <Card className='w-[400px]'>
      <CardHeader className='items-center'>
        <div className='flex flex-row gap-2 self-end'>
          <Button size='sm'>Share</Button>
        </div>
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
