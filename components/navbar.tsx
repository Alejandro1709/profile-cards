import { ModeToggler } from './mode-toggler';
import { Button } from './ui/button';

function Navbar() {
  return (
    <nav className='flex justify-center items-center h-16 border-b'>
      <div className='flex flex-row justify-between gap-2 items-center w-full mx-8'>
        <h2>Logo</h2>
        <div className='flex flex-row gap-4'>
          <ModeToggler />
          <Button>Login</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
