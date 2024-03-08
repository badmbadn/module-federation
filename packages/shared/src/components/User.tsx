
export const User = ({username}: {username?:string}) => {
  return (
    <div>
      user:{username ?? 'user'}
    </div>
  )
};
