export const SpringMvcandSpringBoot: string = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Java基础</title>
     <meta name="referrer" content="no-referrer">
  </head>
  <body>
  <div id="in2">
    <h1 id="in1">SpringMVC 与 SpringBoot</h1>
    <h2>SpringMvc</h2>
    <p>
      SpringMvc 是 Spring 框架的一部分，替代 Servlet
      来接受请求，处理请求，返回处理结果给客户端。
    </p>
    <p>SpringMvc 相比较传统的 Servlet 相比，有以下优点：</p>
    <ul>
      <li><p>基于 MVC 架构，功能分工明确，解耦。</p></li>
      <li>
        <p>
          作为 Spring 框架的一部分，可以使用 Spring 的 IOC 和 AOP，方便整合
          Spring 生态。
        </p>
      </li>
      <li>
        <p>SpringMVC 强化注解的使用，在控制器，Service，DAO 都可以使用注解。</p>
      </li>
    </ul>
    <h3>使用 SpringMVC 框架处理 web 请求的顺序</h3>
    <p>
      <img
        src="https://upload-images.jianshu.io/upload_images/27448672-f2a9ad088a2bd7d9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
        alt="SpringMVC"
      />
    </p>
    <h2>Springboot</h2>
    <p>使用 Springboot 的目的呢，就是快速生成一个基于 Spring 的应用程序。</p>
    <h3>自动装配</h3>
    <p>
      自动装配机制官网的解释是，会试图根据你所添加的依赖来配置你的 Spring
      应用程序。
    </p>
    <p>
      例如在你添加了 <code>spring-boot-starter-web</code> 依赖后，Springboot
      会自动配置一个嵌入式的 Tomcat 服务器，并配置好
      DispatcherServlet，视图解析器等 SpringMVC 组件。
    </p>
    <h4>SpringBoot 是怎么自动配置的？</h4>
    <h5>启动引导</h5>
    <p>
      以一个带有
      <code>@SpringBootApplication</code>
      的注解的主类作为入口，这个注解是一个组合注解，它包含了
    </p>
    <ul>
      <li>
        <p>
          @Configuration：表明该类为配置类，类似于 Spring 中的 xml 配置文件。
        </p>
      </li>
      <li>
        <p>
          ComponentScan： 用于扫描当前包及其子包下的组件如
          <code>@controller</code> 等，将它们注册为 Spring 容器中的 Bean。
        </p>
      </li>
      <li>
        <p>
          @EnableAutoConfiguration：用于触发自动配置，开启自动配置功能，通过
          <code>AutoConfigurationImportSelector</code>
          类来加载自动配置类。并通过
          <code>AutoConfigurationPackage</code>
          将入口类的包及子包都纳入扫描范围，可以让自动配置能找到其中的组件。
        </p>
      </li>
    </ul>
    <h5>自动配置类的加载：AutoConfigurationImportSelector</h5>
    <ul>
      <li>
        当
        <code>@EnableAutoConfiguration</code>
        被解析时，自动配置类的加载：AutoConfigurationImportSelector
        开始工作，会从类路径下的
        <code>META - INF/spring.factories</code> 文件中查找并加载自动配置类。
      </li>
    </ul>
    <blockquote>
      <p>
        在 Springboot 2.7.0 版本后，自动装配路径改为
        META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports
      </p>
    </blockquote>
    <h5>哪些需要自动配置?</h5>
    <p>Springboot 基于@Conditional 注解家族，可以配置自动装配的规则。</p>
    <p>例如：</p>
    <ul>
      <li>
        <p>
          @ConditionalOnClass：检查特定的类是否在类路径中存在。例如，在
          DataSourceAutoConfiguration
          中，可能会有@ConditionalOnClass({DataSource.class,
          EmbeddedDatabaseType.class})。这意味着只有当 DataSource 类和
          EmbeddedDatabaseType
          类都在类路径中时，这个自动配置类才有可能被启用，因为这表示项目可能需要配置数据源。
        </p>
      </li>
      <li>
        <p>
          @ConditionalOnMissingClass：与@ConditionalOnClass
          相反，用于检查特定的类是否不存在于类路径中。如果存在，相应的自动配置可能不会进行。
        </p>
      </li>
    </ul>
    <h4>自定义自动装配组件</h4>
    <p>
      开发自己的自动装配，使用者只需要添加依赖到项目中，SpringBoot
      会自动根据装配规则完成配置。
    </p>
    <h5>了解自动配置的 Bean</h5>
    <p>实现自动配置的类需要用 <code>@AutoConfiguration</code> 注解。</p>
    <h5>定位自动配置候选者</h5>
    <p>
      Springboot 会检查
      <code
        >META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports</code
      >
      的文件。该文件应列出您的配置类，每行一个类名，如下例所示：
    </p>
    <pre><code>com.mycorp.libx.autoconfigure.LibXAutoConfiguration
com.mycorp.libx.autoconfigure.LibXWebAutoConfiguration
</code></pre>
    <h3>IOC（控制反转）</h3>
    <p>IOC 的概念是一个容器，容器管理着很多的对象也被称为 Bean。</p>
    <p>
      原本对象的创建和对象之间的依赖关系是由我们手动决定的，比如 new 一个
      service 实例，然后再调用 service 实例的方法。但是 IOC
      的概念是这些事情不再是我们手动做，而是交给容器。
    </p>
    <p>从</p>
    <p>
      <code>private UserRepository userRepository = new UserRepository();</code>
    </p>
    <p>变成了</p>
    <pre><code>@Autowired
private UserRepository userRepository;
</code></pre>
    <h4>IOC 的好处</h4>
    <ul>
      <li>降低耦合度：</li>
    </ul>
    <p>
      在传统模式下，例如我在 <code>UserService</code> 调用
      <code>UserMapper时</code>，UserMapper 是在 UserService 里通过 New
      关键字创建的，这种情况下，如果 UserMapper 发生变化时，UserService
      就需要适应的改变代码来符合变化。
    </p>
    <p>但在 IOC 下，UserMapper 是由 IOC 创建的不再受 UserService 的管理。</p>
    <h4>IOC 是怎么实现的？</h4>
    <p>有两种方式，Java 注解和 Java 代码配置</p>
    <p>Java 注解：</p>
    <ul>
      <li><p>@Component：当前类是组件，没有明确的意思</p></li>
      <li><p>@Service： 当前类在业务逻辑层使用</p></li>
      <li><p>@Repository：当前类在数据访问层</p></li>
      <li><p>@Controller： 当前类在展示层（MVC）使用</p></li>
    </ul>
    <p>
      使用注解在实体类上，会告诉 Spring，在项目运行时，帮我创建实体类的 Bean
      添加到 IOC。
    </p>
    <p>然后可以在例如 Service 中，使用这个 Bean</p>
    <p>语法：</p>
    <ul>
      <li><p>@Autowired：根据 Bean 的 Class 类型来自动装配</p></li>
      <li>
        <p>
          @Resource：翻译为“资源”，根据 Bean 得属性名称（id 或 name）自动装配
        </p>
      </li>
    </ul>
    <h3>AOP</h3>
    <p>
      AOP 主要用于将一些像日志记录，事务管理等功能，从业务逻辑代码中抽离出来。
    </p>
    <p>
      例如定义一个日志切面，只需要在一个方法上加上注解，就可以完成记录日志的功能，同理适用于鉴权等业务场景。
    </p>
    <h4>AOP 核心概念</h4>
    <ul>
      <li><p>Joinpoint（连接点）：指可以被动态代理拦截目标类的方法</p></li>
      <li><p>Pointcut（切入点）：指要对哪些 Joinpoint 进行拦截</p></li>
      <li><p>Advice（通知）：指拦截到 Joinpoint 之后要做的事</p></li>
      <li><p>Target（目标）：指代理的目标对象</p></li>
      <li>
        <p>Weaving（织入）：指把增强代码应用到目标上，生成代理对象的过程。</p>
      </li>
      <li><p>Proxy（代理）：指生成的代理对象。</p></li>
      <li><p>Aspect（切面）：切入点和通知的结合。</p></li>
    </ul>
    <h4>AOP 通知分类</h4>
    <ul>
      <li><p>before（前置通知）：通知方法在目标方法调用之前执行</p></li>
      <li><p>after（后置通知）：通知方法在目标方法返回或异常后调用</p></li>
      <li>
        <p>after-returning（返回后通知）：通知方法会在目标方法返回后调用</p>
      </li>
      <li>
        <p>
          after-throwing（抛出异常通知）：通知方法会在目标方法抛出异常后调用
        </p>
      </li>
      <li><p>around（环绕通知）：通知方法会将目标方法封装起来</p></li>
    </ul>
    <h4>AOP 使用方式</h4>
    <h5>基于注解</h5>
    <ul>
      <li>
        <p>引入 <code>spring-boot-starter-aop</code> 依赖</p>
      </li>
      <li><p>定义一个服务类</p></li>
    </ul>
    <pre><code>@Service
public class HelloServiceImpl implements HelloService {
    @Override
    public void sayHello() {
        System.out.println(&quot;Hello World!&quot;);
    }
}
</code></pre>
    <ul>
      <li>定义切入点：</li>
    </ul>
    <pre><code>@Aspect
@Component
public class MyAspect {
    @Pointcut(&quot;execution(* com.example.service.*.*(..))&quot;)
    public void serviceMethods() {}
    @Before(&quot;serviceMethods()&quot;)
    public void logBefore(JoinPoint joinPoint) {
        System.out.println(&quot;方法 &quot; + joinPoint.getSignature().getName() + &quot; 即将被调用&quot;);
    }
}
</code></pre>
    <h5>自定义注解 @interface</h5>
    <h6>元注解</h6>
    <ul>
      <li><p>@Target：用于描述注解的使用范围，该注解可以使用在什么地方</p></li>
      <li><p>@Retention：表明该注解的生命周期</p></li>
      <li>
        <p>
          @Inherited：是一个标记注解，@Inherited
          阐述了某个被标注的类型是被继承的。如果一个使用了@Inherited 修饰的
          annotation 类型被用于一个 class，则这个 annotation 将被用于该 class
          的子类。
        </p>
      </li>
      <li>
        <p>
          @Documented：表明该注解标记的元素可以被 Javadoc 或类似的工具文档化
        </p>
      </li>
    </ul>
    <h5>自定义注解结合 AOP 的使用</h5>
    <ul>
      <li>创建自定义注解</li>
    </ul>
    <pre><code>@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface MyCustomAnnotation {
}
</code></pre>
    <ul>
      <li>创建切面类</li>
    </ul>
    <pre><code>@Aspect
@Component
public class MyAspect {
    // 定义切入点为带有自定义注解的方法
    @Pointcut(&quot;@annotation(com.example.demo.MyCustomAnnotation)&quot;)
    public void customAnnotatedMethods() {}

    @Around(&quot;customAnnotatedMethods()&quot;)
    public Object aroundCustomAnnotatedMethod(ProceedingJoinPoint pjp) throws Throwable {
        System.out.println(&quot;Before executing method with custom annotation.&quot;);
        Object result = pjp.proceed();
        System.out.println(&quot;After executing method with custom annotation.&quot;);
        return result;
    }
}
</code></pre>
    <ul>
      <li>在服务类中使用自定义注解</li>
    </ul>
    <pre><code>public interface HelloService {
    void sayHello();

    @MyCustomAnnotation
    void customAnnotatedMethod();
}


@Service
public class HelloServiceImpl implements HelloService {
    @Override
    public void sayHello() {
        System.out.println(&quot;Hello World!&quot;);
    }

    @Override
    public void customAnnotatedMethod() {
        System.out.println(&quot;This is a custom annotated method.&quot;);
    }
}
</code></pre>
    <h4>AOP 的实现原理</h4>
    <h3>Spring Bean 和依赖注入</h3>
    <p>
      SpringBean 是用于声明一个被 IOC 管理的对象，这些对象可以是任何 java
      类的实例。
    </p>
    <h4>@Bean 注解的使用</h4>
    <ul>
      <li>
        <p>
          @Bean 注解作用在方法上，产生一个 Bean 对象，然后这个 Bean 对象交给
          Spring 管理，剩下的你就不用管了。产生这个 Bean 对象的方法 Spring
          只会调用一次，随后这个 Spring 将会将这个 Bean 对象放在自己的 IOC
          容器中。
        </p>
      </li>
      <li><p>@Bean 方法名与返回类名一致，首字母小写。</p></li>
      <li>
        <p>
          @Component、@Repository、@Controller、@Service
          这些注解只局限于自己编写的类，而 @Bean 注解能把第三方库中的类实例加入
          IOC 容器中并交给 Spring 管理。
        </p>
      </li>
      <li><p>@Bean 一般和 @Component 或者 @Configuration 一起使用</p></li>
    </ul>
    <h4>Bean 的生命周期</h4>
    <p>Bean 的生命周期概括就是四个阶段：</p>
    <ul>
      <li><p>实例化</p></li>
      <li><p>属性赋值</p></li>
      <li><p>初始化</p></li>
      <li><p>销毁</p></li>
    </ul>
    <h3>SpringBoot 的启动流程</h3>
    <p>1，创建 SpringApplication 对象</p>
    <p>2，进入 run()方法</p>
    <pre><code> public static ConfigurableApplicationContext run(Class&lt;?&gt;[] primarySources, String[] args) {
        return (new SpringApplication(primarySources)).run(args);
    }
</code></pre>
    <p>
      3，run 方法会 new 一个 SpringApplication 对象并完成一些赋值操作,
      例如设置一些横幅信息，自动类型转换的开启，上下文工厂，初始化器，监听器等等。
    </p>
    <p>
      4，调用 SpringApplication 对象的 run 方法，xxxx，最后返回
      ConfigurableApplicationContext 对象。
    </p>
    <p>SpringApplication 对象的 run 方法主要做了几件事：</p>
    <ul>
      <li>
        <p>启动准备：</p>
        <ul>
          <li>
            <p>
              Startup startup =
              SpringApplication.Startup.create();：创建一个用于跟踪启动过程的
              Startup 对象。
            </p>
          </li>
          <li>
            <p>
              如果设置了注册关闭钩子（this.registerShutdownHook 为
              true），则通过
              shutdownHook.enableShutdownHookAddition();启用关闭钩子的添加。关闭钩子在应用程序退出时执行一些清理操作。
            </p>
          </li>
          <li>
            <p>
              DefaultBootstrapContext bootstrapContext =
              this.createBootstrapContext();：创建一个默认的引导上下文，用于在应用启动的早期阶段初始化关键组件。
            </p>
          </li>
        </ul>
      </li>
      <li>
        <p>获取监听器并触发启动事件：</p>
        <ul>
          <li>
            <p>
              SpringApplicationRunListeners listeners =
              this.getRunListeners(args);：获取启动监听器列表。
            </p>
          </li>
          <li>
            <p>
              listeners.starting(bootstrapContext,
              this.mainApplicationClass);：触发启动事件，通知监听器应用即将开始启动。
            </p>
          </li>
        </ul>
      </li>
      <li>
        <p>准备应用环境；</p>
        <ul>
          <li>
            <p>
              ApplicationArguments applicationArguments = new
              DefaultApplicationArguments(args);：创建应用程序参数对象，用于处理命令行参数。
            </p>
          </li>
          <li>
            <p>
              ConfigurableEnvironment environment =
              this.prepareEnvironment(listeners, bootstrapContext,
              applicationArguments);：准备应用程序的环境，包括加载系统属性、环境变量和配置文件中的属性等。监听器可以参与环境的准备过程。
            </p>
          </li>
        </ul>
      </li>
      <li>
        <p>打印启动横幅</p>
        <ul>
          <li>
            Banner printedBanner =
            this.printBanner(environment);：如果配置了启动横幅显示，则打印启动横幅。
          </li>
        </ul>
      </li>
      <li>
        <p>创建应用上下文</p>
        <ul>
          <li>
            <p>
              context =
              this.createApplicationContext();：根据应用类型创建应用上下文，可能是
              AnnotationConfigServletWebServerApplicationContext（Web 应用）或
              AnnotationConfigApplicationContext（非 Web 应用）。
            </p>
          </li>
          <li>
            <p>
              context.setApplicationStartup(this.applicationStartup);：设置应用程序的启动方式。
            </p>
          </li>
        </ul>
      </li>
      <li>
        <p>准备和刷新上下文：</p>
        <ul>
          <li>
            <p>
              this.prepareContext(bootstrapContext, context, environment,
              listeners, applicationArguments,
              printedBanner);：准备应用上下文，包括设置父上下文、加载 Bean
              定义、应用环境等。监听器可以参与上下文的准备过程。
            </p>
          </li>
          <li>
            <p>
              this.refreshContext(context);：刷新应用上下文，这是 Spring
              框架启动应用程序的关键步骤，在此过程中创建和初始化
              Bean、进行属性赋值和依赖注入等操作。
            </p>
          </li>
          <li>
            <p>
              this.afterRefresh(context,
              applicationArguments);：在上下文刷新后执行一些额外的操作。
            </p>
          </li>
        </ul>
      </li>
      <li>
        <p>
          启动完成和记录启动信息：
          程序启动完成，并通知监听器应用程序已经成功启动，并传递启动时间。
        </p>
      </li>
      <li>
        <p>
          调用运行器和处理就绪事件：调用应用程序中的运行器（如果有），用于在应用启动后执行特定任务。如果应用上下文正在运行，则触发就绪事件
        </p>
      </li>
      <li>
        <p>
          异常处理：在整个过程中，如果发生异常，则通过 throw
          this.handleRunFailure(context, ex, listeners);或 throw
          this.handleRunFailure(context, ex,
          (SpringApplicationRunListeners)null);处理启动失败的情况。
        </p>
      </li>
    </ul>
    <h3>SpringBoot 事务</h3>
    <p>
      在 springboot
      中，实现事务管理有两种方式，声明式和编程式，我主要用的是声明式。
    </p>
    <h4>声明式事务管理 @Transactional</h4>
    <p>
      声明式事务管理主要基于
      AOP，对方法进行拦截，在方法开始或创建之前加入一个事务，在执行完目标方法后根据情况回滚或者提交。
    </p>
    <pre><code>
@Service
public class UserService {
    @Transactional
    public void updateUserAndOrders(User user) {
        // 更新用户信息
        userRepository.update(user);
        // 更新用户相关订单信息
        orderRepository.updateOrdersForUser(user.getId());
    }
}
</code></pre>
    <p>@Transactional 注解的属性介绍：</p>
    <ul>
      <li>
        <p>propagation： 事务的默认传播属性，默认值为 Propagation.REQUIRED。</p>
      </li>
      <li><p>isolation： 事务隔离级别，Isolation.DEFAULT 默认值。</p></li>
      <li><p>timeout： 事务超时时间</p></li>
      <li><p>readOnly： 只读事务属性</p></li>
      <li><p>rollbackFor 和 noRollbackFor（事务回滚规则）属性</p></li>
    </ul>
    <h4>事务使用规则</h4>
    <ul>
      <li><p>@Transactional 注解的必须是 public 的方法</p></li>
      <li><p>@Transactional 注解建议在方法和类上使用</p></li>
      <li><p>只有来自外部的方法调用才会被 aop 捕获</p></li>
      <li>
        <p>
          受检异常不会导致回滚，只有 RuntimeException
          才会自动回滚，也可以自定义异常回滚规则
        </p>
      </li>
    </ul>
    <h3>Springboot 上下文</h3>
    <p>
      SpringBoot 上下文是 Spring
      框架中的核心概念，用于管理和维护应用程序中的各种 Bean，存储所有被 Spring
      管理的对象，并负责对象的创建，配置，生命周期管理以及依赖注入等操作。
    </p>
    <h4>SpringBoot 上下文的类型</h4>
    <ul>
      <li>
        <p>
          AnnotationConfigApplicationContext： 用于非 Web
          应用程序或者单元测试环境管理 Bean
        </p>
      </li>
      <li>
        <p>
          AnnotationConfigServletWebServerApplicationContext： 在 Springboot
          启动时创建，用于管理 Bean，集成 web 服务器，用于处理 HTTP 请求。
        </p>
      </li>
      <li>
        <p>
          AnnotationConfigReactiveWebServerApplicationContext： 用于构建响应式
          Web 应用程序，WebFlux。
        </p>
      </li>
    </ul>
    <h4>使用和获取 SpringBoot 上下文</h4>
    <ul>
      <li>
        在组件内部获取上下文： 可以通过实现
        <code>ApplicationContextAware</code> 接口来获取
        <code>ApplicationContext</code>
      </li>
    </ul>
    <pre><code>@Component
public class MyComponent implements ApplicationContextAware {
    private ApplicationContext applicationContext;
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }
    public void doSomethingWithContext() {
        // 从上下文获取Bean
        MyService myService = applicationContext.getBean(MyService.class);
        myService.doSomething();
    }
}
</code></pre>
    <p>
      或者可以通过在一个 Springboot 组件，如@Service ，@Controller 里通过
      <code>@Autowired</code> 获取 ApplicationContext
    </p>
    <pre><code>@Service
public class AnotherService {
    @Autowired
    private ApplicationContext applicationContext;
    public void useContext() {
        // 获取并使用Bean
        MyBean myBean = applicationContext.getBean(MyBean.class);
        myBean.doSomething();
    }
}
</code></pre>
    <h4>SpringBoot上下文与IOC的联系</h4>
    <p>
      IOC是一种设计模式，将对象的创建和管理转移到容器(在Spring种就是ApplicationContext)，ApplicationContext是IOC容器的具体实现，负责管理应用程序中所有的Bean，包括Bean的创建，索引，配置等。
    </p>
    </div>
  </body>

  <style>
    body {
      
    }
    #in1 {
      text-align: center;
    }
      #in2 {
      background: linear-gradient(to bottom left, #f1f1f1, white);
      padding: 30px 0px 0px 40px;
      
      }
  </style>
</html>
`;
