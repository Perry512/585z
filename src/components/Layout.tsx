const Layout = ({ children } : { children : React.ReactNode}) => {
    return (
        <div className='min-h-1/4 pt-20 w-[100vw]'>
            {children}
        </div>
    )
}

export default Layout;