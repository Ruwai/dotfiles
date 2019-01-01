# C/C++ Snippets
This extension for Visual Studio Code adds snippets for C/C++.


## Installation

1. Install Visual Studio Code 0.10.1 or higher
2. Launch VS Code
3. From the command palette `Ctrl`+`Shift`+`P` (Windows, Linux) or `Cmd`+`Shift`+`P` (OSX)
4. Type `ext install` or just simply select `Install Extension`
5. Choose the extension - Cpp Snippets
6. Relaunch VS Code

## Usage
<pre>
   
   For demo:
   input "for" at c or cpp file, press the tab key,and the FOR loop snippet（在c或者cpp文件中输入for，
   选择列表的for 代码片段，再按下tab，下面的for语句就出来了)   
   for(index = 0;index < length;index++)
   {

   }
   come out.
   then,你可以通过tab移动光标，你可以改变index，不改变按tab即可

   The following is a list of the snippets

   for C or C++:

   prefix(简写)  preview note of snippet(代码片段预览说明) 
   fori         for(i = 0;i < length;i++){}
   fo           for(index = 0;index < length;index++)
   for          for(index = 0;index < length;index++)
   do           do{}while{}
   dowhile      do{}while{}
   while        while(){}
   i            if(){}
   if           if(){}
   ifelse       if(){}else{}
   el           else{}
   else         else{}
   elseif       else if(){}
   else if      else if(){}
   elseifelse   else if(){}else{}
   pri          printf("msg");
   int i        int i = 0;
   inti         int i = 0;
   int j        int j = 0;
   intj         int j = 0;
   int n        int n = 0;
   intn         int n = 0;
   ch           char* str = "msg"
   st           char* str = "msg"
   inc          #include <>
   mai          void main(int argc,char argc[]){}
   main         void main(int argc,char argc[]){}
   sw           switch(){case:breadk;default:break}
   switch       switch(){case:breadk;default:break}
   ca           case:break;
   case         case:break;
   vo           void functionname(args){}
   fu           funtionname(arg){}
   fun          funtionname(arg){}
   enum         enum name{}
   ifdef        #ifdef #endif
   ifdefelse    #ifdef #else #endif
   ifndef       #ifndef #endif
   stru         struct name{}
   struct       struct name{}
   union        union name{}
   si           sizeof(name)
   size         sizeof(name)

   only for C++:
   prefix(简写)  preview note of snippet(代码片段预览说明)   
   cla          class:{public:private:}
   class        class:{public:private:}
   namespace    namespace MyNamespace{}
   try          try{}catch{}
   cout         std::cout << "msg" << '\n';
   cin          std::cin << name;
   iost         iostream
   static_ca    static_cast<type>(obj)
   dynamic_ca   dynamic_cast<type>(obj);
   const_ca     const_cast<type>(obj);
   reint        reinterpret_cast<type>(obj);
</pre>


