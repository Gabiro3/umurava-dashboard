import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function RecentSales() {
  return (
    <div className='space-y-8'>
  {/* Job 1: Software Engineer at TechCorp */}
  <div className='flex items-center gap-4'>
    <Avatar className='h-9 w-9'>
      <AvatarImage src='/avatars/01.png' alt='Avatar' />
      <AvatarFallback>AM</AvatarFallback>
    </Avatar>
    <div className='flex flex-1 flex-wrap items-center justify-between'>
      <div className='space-y-1'>
        <p className='text-sm font-medium leading-none'>Umurava Ltd.</p>
        <p className='text-sm text-muted-foreground'>Software Engineer</p>
      </div>
      <div className='font-medium text-yellow-500'>Under Review</div>
    </div>
  </div>

  {/* Job 2: Junior Software Engineer at DataSoft */}
  <div className='flex items-center gap-4'>
    <Avatar className='h-9 w-9'>
      <AvatarImage src='/avatars/02.png' alt='Avatar' />
      <AvatarFallback>LM</AvatarFallback>
    </Avatar>
    <div className='flex flex-1 flex-wrap items-center justify-between'>
      <div className='space-y-1'>
        <p className='text-sm font-medium leading-none'>KLab Rwanda</p>
        <p className='text-sm text-muted-foreground'>Junior Software Engineer</p>
      </div>
      <div className='font-medium text-green-500'>Interview Scheduled</div>
    </div>
  </div>

  {/* Job 3: Backend Developer at WebDev Solutions */}
  <div className='flex items-center gap-4'>
    <Avatar className='h-9 w-9'>
      <AvatarImage src='/avatars/03.png' alt='Avatar' />
      <AvatarFallback>EN</AvatarFallback>
    </Avatar>
    <div className='flex flex-1 flex-wrap items-center justify-between'>
      <div className='space-y-1'>
        <p className='text-sm font-medium leading-none'>RSwitch Ltd.</p>
        <p className='text-sm text-muted-foreground'>Backend Developer</p>
      </div>
      <div className='font-medium text-blue-500'>Offer Extended</div>
    </div>
  </div>

  {/* Job 4: Full Stack Developer at CodeWorks */}
  <div className='flex items-center gap-4'>
    <Avatar className='h-9 w-9'>
      <AvatarImage src='/avatars/04.png' alt='Avatar' />
      <AvatarFallback>SM</AvatarFallback>
    </Avatar>
    <div className='flex flex-1 flex-wrap items-center justify-between'>
      <div className='space-y-1'>
        <p className='text-sm font-medium leading-none'>Spiderbit Ltd.</p>
        <p className='text-sm text-muted-foreground'>Full Stack Developer</p>
      </div>
      <div className='font-medium text-red-500'>Rejected</div>
    </div>
  </div>

  {/* Job 5: Software Engineer Intern at DevLabs */}
  <div className='flex items-center gap-4'>
    <Avatar className='h-9 w-9'>
      <AvatarImage src='/avatars/05.png' alt='Avatar' />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <div className='flex flex-1 flex-wrap items-center justify-between'>
      <div className='space-y-1'>
        <p className='text-sm font-medium leading-none'>Intare Brewery</p>
        <p className='text-sm text-muted-foreground'>Software Engineer Intern</p>
      </div>
      <div className='font-medium text-gray-500'>Awaiting Interview</div>
    </div>
  </div>
</div>

  )
}
