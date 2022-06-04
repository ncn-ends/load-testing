# Types of load testing

- Throughput testing
- Stress testing
- Spike testing
- Soak testing


| Type        | Duration                | Purpose  | How to |
| ----------- | ----------------------- | -------- | ---- |
| Stress      | Medium (20-30 min)      | - Determine breaking point of system and how it recovers  | <br>-Multistaged; ramp up user count -> maintain -> ramp up user count -> maintain<br>- 1 req/sec/user
| Spike       | Short (3-5 min)         | - Determines how the system deals with a sudden burst of traffic | -Ramp up to extremely high user count <br>- 1 req/sec/user  |
| Throughput  | Very short (<1 min)     | - Determines maximum requests per second system can handle| - Arbitrary number of users requesting unlimited times per second  |
| Soak        | Very long (4-12 hours)  | - Determines performance and health of system over a long period of time | - Ramp up to 80-90% of maximum users -> maintain   |

## Stress testing  

*What is the breaking point of the system?*
 
Determines breaking point of system and how the system handles it  
- how the system will behave under extreme conditions  
    - what is the maximum capacity of the system in terms of users or requests
    - determine what is the breakpoint point of the system and its failure mode
    - determine if the system will recover on its own
- usually goes in stages
    - separates the amount of load between an interval of time
        - e.g. duration: 2m, target: 100 = 100 users over 2 minutes
    - ramp up -> maintain -> ramp up -> maintain

## Spike Testing

*How can it deal with sudden burst of unexpected traffic?*

Determines how system will perform under sudden surge of traffic
- Grades
    - **excellent**: system did not degrade at all during surge of traffic
    - **good**: response time is slower, but system does not produce errors
    - **poor**: system produces errors during the surge of traffic and recovers to normal after traffic subsides
    - **bad**: system crashes, does not recover after the traffic has subsided

## Throughput Testing

*How much can it take?*  

- Assesses the performance of the system in terms such as maximum concurrent users, maximum req/sec.  
- Ensures continuously meeting performance standards as system evolves
    - Might be beneficial as part of a CI/CD pipeline
        - Will allow comparing between versions to see performance increases / decreases
- Will use thresholds to ensure meeting requirements
    - e.g. 99% of requests must complete below 150ms

## Soak Testing

*Slow and steady*

- Ensure reliability of system over a long period of time
- Example use cases:
    - Verify system doesn't suffer from memory leaks
    - Verify expected application restarts don't lose requests
    - Find bugs that may not occur immediately
        - e.g. race conditions
    - Ensure storage space isn't exhausted overtime
    - Ensure external sevice dependencies don't stop working after a certain number of requests
- How to define:
    - Determine max amount of users system can handle and get 75-80% of that value and set VUs to that value
    - Run test in 3 stages, ramp up to the VU count, stay there for 4-12 hours, then ramp down to 0